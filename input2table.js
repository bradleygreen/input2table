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