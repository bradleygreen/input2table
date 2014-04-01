/* arrayDemo function
 * purpose: to demonstrate arrays
 * parameters: none
 * returns: nothing*/
function arrayDemo()
{
	var students = new Array("Elaine", "Eric", "Ozi", "Josh", "Brad", "Nathan", "Richard", "Ruben", "Kirsten");
	console.log("I started out with " + students.length + " students.");
	students.push("Dylan"); // add the instuctor to the list of students
	console.log("Now I have " + students.length + " students, including Dylan.");
	
	/* typical loop to visit each element of an array
	 * index = 0; starting condition
	 * index < students.length; ending condition
	 * index++; step - "add one to index" every time*/
	for(var index = 0; index < students.length; index++)
	{
		console.log(students[index] + " attended class");
		document.getElementById("jsOutput").innerHTML = document.getElementById("jsOutput").innerHTML + students[index] + " attended class<br />";
	}
	document.getElementById("jsOutput").innerHTML = document.getElementById("jsOutput").innerHTML + "I even saw John around here today!<br />";
}

/* displayStudents function (callback function)
 * purpose: harvest student names & display them
 * parameters: none
 * returns: nothing*/
function displayStudents()
{
	console.log("the displayStudents() function fired");
	
	try
	{
		var data = document.getElementById("inputArea").value;
		var studentArray = convertTextareaToArray(data);
	}
	catch(exception)
	{
		document.getElementById("jsExceptions").innerHTML = document.getElementById("jsExceptions").innerHTML + exception[0];
		studentArray = exception[1];
		// return; // stop the function RIGHT NOW
	}
	
	for(var index = 0; index < studentArray.length; index++)
	{
		console.log("the displayStudents() function's for loop fired");
		document.getElementById("jsOutput").innerHTML = document.getElementById("jsOutput").innerHTML + studentArray[index] + " attended class<br />";
	}
}
 
/* convertTextareaToArray function
 * purpose: take data from the text area and conver it to an array (callback function)
 * parameters: (string) data from textarea
 * returns: (array) array of students */
 function convertTextareaToArray(data)
 {
	console.log("the convertTextareaToArray(data) function fired");
	var studentArray = data.split("\n");
	return (studentArray);
 }
 
/* window.onload = function()
 * purpose: setup the div for the css button when the page loads, and handle when it fires (see divButton.onclick)
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
		displayStates();
	}
}

/* displayData function (callback function)
 * purpose: harvest data & display it
 * parameters: none
 * returns: nothing*/
function displayStates()
{
	console.log("the displayStates() function fired");
	var data = document.getElementById("inputArea").value;
	var tempLineArray = sameLineSplit(data);
	
	for(var index = 0; index < tempLineArray.length; index++)
	{
		
		console.log("the displayStates() function's first for loop fired");
		var tempCsvArray = csvSplit(tempLineArray[index]);
		console.log("the displayStates() function's for(for(csvIndex)) fired");
		document.getElementById("jsOutput").innerHTML = document.getElementById("jsOutput").innerHTML + "You have lived in " + tempCsvArray[0] + ", which gained statehood in " + tempCsvArray[1] + " and has the motto: \"" + tempCsvArray[2] + "\".<br /><br />";
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

function convertTextareaToArray(data)
{
	var numExceptions = 0;
	var dirtyArray = data.split("\n");
	var studentArray = new Array(); //empty array
	
	for(var index = 0; index < dirtyArray.length; index++) //copy the values that actually exist
	{
		if(dirtyArray[index] != "")
		{
			studentArray.push(dirtyArray[index]);
		}
		else //dirty input detected
		{
			//throw("You did something wrong: DOH!");
			numExceptions ++;
		}
	}
	if(numExceptions > 0)
	{
		var javaException = new Array();
		javaException.push(numExceptions + " blank names detected"); // error message for the user
		javaException.push(studentArray); // second element: cleaned student array
		throw(javaException); //now throw both things as part of the javaException array.
	}
	else
	{
		return(studentArray);
	}
}









