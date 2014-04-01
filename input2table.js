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
	var newLineArray = data.split("\n");
	return (newLineArray);
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
	var data = document.getElementById("inputArea").value;
	var tempLineArray = sameLineSplit(data);
	
	for(var index = 0; index < tempLineArray.length; index++)
	{
		console.log("the displayTable() function's first for loop fired");
		var tempCsvArray = csvSplit(tempLineArray[index]);
		console.log("the displayStates() function's for(for(csvIndex)) fired");
		document.getElementById("jsOutput").innerHTML = document.getElementById("jsOutput").innerHTML + "<table>";
		
		// old function + "You have lived in " + tempCsvArray[0] + ", which gained statehood in " + tempCsvArray[1] + " and has the motto: \"" + tempCsvArray[2] + "\".<br /><br />";
	}
}