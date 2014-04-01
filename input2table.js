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
	for(var lineIndex = 0; lineIndex < dirtyLineArray.length; lineIndex++)
	{
		console.log("the sameLineSplit(data) function's for loop fired");
		if(dirtyLineArray[lineIndex] == "")
		{
			lineException += "Line " + (lineIndex+1) + " was empty, skipping<br />";
		}
		else
		{
			cleanLineArray.push(dirtyLineArray[lineIndex]);
		}
	}
	var mixedLineArray = new Array();
	mixedLineArray.push(lineException);
	mixedLineArray.push(cleanLineArray);
	return (mixedLineArray);
}

/* csvSplit()function
 * purpose: split two-dimensional array into usable pieces.
 * parameters: line of array from the sameLineSplit function
 * returns: array of one state, one year, and one motto*/
function csvSplit(lines)
{
	console.log("the csvSplit(lines) function fired");
	var newCSV_Array = lines.split(",");
	return (newCSV_Array);
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
	try
	{
		var tempLineArray = sameLineSplit(data); //call sameLineSplit function, handing it data and getting back an array
	}
	catch(mixedLineArray)
	{
		document.getElementById("jsExceptions").innerHTML = document.getElementById("jsExceptions").innerHTML + mixedLineArray[0];
		tempLineArray = mixedLineArray[1];
	}
	
	//create the header row (will be the same every time)
	newHTMLTable += "<table><tr><th>Standard</th><th>Version</th><th>Date</th></tr>";
	
	for(var index = 0; index < tempLineArray.length; index++)
	{
		console.log("the displayTable() function's first for loop fired");
		
		try
		{
			var tempCsvArray = csvSplit(tempLineArray[index]);
		}
		catch(mixedCsvArray)
		{
			document.getElementById("jsExceptions").innerHTML = document.getElementById("jsExceptions").innerHTML + mixedCsvArray[0];
			studentArray = mixedCsvArray[1];
		}
		
		newHTMLTable += "<tr><td>" + tempCsvArray[0] + "</td><td>" + tempCsvArray[1] + "</td><td>" + tempCsvArray[2] + "</td></tr>";
		
		// old function + "You have lived in " + tempCsvArray[0] + ", which gained statehood in " + tempCsvArray[1] + " and has the motto: \"" + tempCsvArray[2] + "\".<br /><br />";
	}
	// add /table tag to the end of the table
	newHTMLTable += "</table>";
	document.getElementById("jsOutput").innerHTML = newHTMLTable;
}

/* 
// create a Java-style exception if we had errors
	if(numExceptions>0)
	{
			var javaException =  new Array ();
			javaException.push(numExceptions+" blank names detected"); // first element:error message for the userAgent
			javaException.push(studentArray); //second element: cleaned student array
			throw(javaException); //now throw both things to caller
	}			
	else
	{ 
		return(versionsArrays);
	}

exception code for user entering blank data or if the version 
 * number is ≤ 0, throw exception */
/*
function versionsArrays()
{
	// Exception inside the callback function - harvest the text 
	// area data & convert data 
	try
	{
		var data = document.getElementById("inputArea").value;
		var versionNumberArrays = convertTextareaToArray(data);
	}
		catch(exception)
	{
	// break down the Java exception
	var errorMessage = exception[0];
	var versionnumberArray = exception[1];
	document.getElementById("jsExceptions").innerHTML = errorMessage
	}
	
	//print each version, line by line
	for(var index = 0; index<versionsArrays.length;index++)
	{
		document.getElementById("jsOutput").innerHTML=document.getElementById("jsOutput").innerHTML+versionsArray[index]/*references array name+ " attended class"+"<br/>";
	}
	 
}*/
	

/* Exception inside the data from the text area which 
 * converts it to an array 
 *input: (string) data from text area
 *output: (data to table)
 
 function convertTextareaToTable(data)
{
	var numExceptions=0
	
	//splits by array by enter or \name
	dirtyArray=data.split("\n");
	var versionsArrays=newArray();
	
	//copy the values that actually exists
	for(var index=0; index<dirtyArray.length; index++)
		if(dirtyArray[index]!="")
		{
			versionsArrays.push(dirtyArray[index]);
		}
		else
		{
			numExceptions++;//counts numExceptions
		}
}
		
	

	*/