/* window.onload = function()
 * purpose: setup the div for the divButton when the page loads, and handle when it fires (see divButton.onclick)
 * parameters: none
 * returns: nothing*/
window.onload = function()
{
	console.log("the window.onload = function() fired");
	var divButton = document.getElementById('divButton');
	divButton.style.cursor = 'pointer';
	divButton.onclick = function() 
	{
		console.log("the divButton.onclick = function() fired");
		displayTable();
	}
}

/* sameLineSplit()function
 * purpose: split two-dimensional array into usable pieces.
 * parameters: (string) data from textarea
 * returns: (array(array)) two-dimensional array of data*/
function sameLineSplit(data)
{
	console.log("the sameLineSplit(data) function fired");
	var dirtyLineArray = data.split("\n");
	var cleanLineArray =  new Array ();
	var lineException = "";
	for(var lineSplitIndex = 0; lineSplitIndex < dirtyLineArray.length; lineSplitIndex++)
	{
		console.log("the sameLineSplit(data) function's for loop fired");
		if(dirtyLineArray[lineSplitIndex] == "")
		{
			lineException += "Line " + (lineSplitIndex+1) + " was empty. I'm deleting it, HAHA!<br />";
		}
		else
		{
			cleanLineArray.push(dirtyLineArray[lineSplitIndex]);
		}
	}
	var mixedLineArray = new Array();
	mixedLineArray.push(lineException);
	mixedLineArray.push(cleanLineArray);
	throw (mixedLineArray);
}

/* csvSplit()function
 * purpose: split two-dimensional array into usable pieces.
 * parameters: line of array from the sameLineSplit function
 * returns: array of one state, one year, and one motto*/
function csvSplit(lines, lineCounter)
{
	var dirtyCsvArray = lines.split(",");
	var cleanCsvArray = new Array();
	var csvException = "";
	
	if(dirtyCsvArray.length != 3)
	{
		csvException = "Not enough items on useful line " + lineCounter + ", skipping whole line, DOH!<br />";
		throw(csvException);
	}
	else
	{
		for(var csvSplitIndex = 0; csvSplitIndex < dirtyCsvArray.length; csvSplitIndex++)
		{
			if(csvSplitIndex == 0 && dirtyCsvArray[csvSplitIndex] == "") //check to make sure it has data, and not starting with a comma
			{
				csvException = "Part " + (csvSplitIndex+1) + " of useful line " + lineCounter + " was empty, skipping whole line, DOH!<br />";
				throw(csvException);
			}
			else if(csvSplitIndex == 1 && isNaN(parseFloat(dirtyCsvArray[csvSplitIndex] ) ) ) //check to make sure it's a number
			{
				csvException = "Part " + (csvSplitIndex+1) + " of useful line " + lineCounter + " was not a number, skipping whole line, DOH!<br />";				
				throw(csvException);;
			}
			else if(csvSplitIndex == 2 && isNaN(Date.parse(dirtyCsvArray[csvSplitIndex] ) ) ) //check to make sure it is a date
			{
				csvException = "Part " + (csvSplitIndex+1) + " of useful line " + lineCounter + " was not a date, skipping whole line, DOH!<br />";				
				throw(csvException);
			}
			else
			{
				cleanCsvArray.push(dirtyCsvArray[csvSplitIndex]);
			}
			if(cleanCsvArray.length == 3)
			{
				return(cleanCsvArray);
			}
		}
	}
}

/* displayData function (callback function)
 * purpose: harvest data & display it
 * parameters: none
 * returns: nothing*/
function displayTable()
{
	console.log("the displayTable() function fired");
	var newHTMLTable = "";
	var data = document.getElementById("inputArea").value; //get information entered by user
	var tempLineArray = new Array();
	try
	{
		tempLineArray = sameLineSplit(data); //call sameLineSplit function, handing it data and getting back an array
	}
	catch(mixedLineArray)
	{
		document.getElementById("jsExceptions").innerHTML = document.getElementById("jsExceptions").innerHTML + mixedLineArray[0];
		tempLineArray = mixedLineArray[1];
	}
	
	//create the header row (will be the same every time)
	newHTMLTable += "<table><tr><th>Standard</th><th>Version</th><th>Date</th></tr>";
	for(var csvIndex = 0; csvIndex < tempLineArray.length; csvIndex++)
	{
		console.log("the displayTable() function's for loop fired");
		var tempCsvArray = new Array();
		try
		{
			tempCsvArray = csvSplit(tempLineArray[csvIndex], (csvIndex + 1));
			newHTMLTable += "<tr><td>" + tempCsvArray[0] + "</td><td>" + tempCsvArray[1] + "</td><td>" + tempCsvArray[2] + "</td></tr>";
		}
		catch(exceptions)
		{
			document.getElementById("jsExceptions").innerHTML = document.getElementById("jsExceptions").innerHTML + exceptions;
		}
	}
	// add /table tag to the end of the table
	newHTMLTable += "</table>";
	document.getElementById("jsOutput").innerHTML = newHTMLTable;
}
