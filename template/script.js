//Step One, The Clicker
	//Create a var called clickCount, and set it equal to 0
	//Set var clickCount to a <p> html tag so it can be displayed
	//place an image on the page and give it an id like "clicker"
	//create a function called onClick that adds 1 to the var clickCount whenever the image with the id "clicker" is clicked.

var clickCount = 0
document.getElementById("clicker").addEventListener('click', function () {
	clickCount += 1;
	document.getElementById("clickerCount").innerHTML = clickCount + " " + "Points"; 
})

//Step Two, 


