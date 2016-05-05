//Step One, The Clicker
	//Create a var called clickCount, and set it equal to 0
	//Set var clickCount to a <p> html tag so it can be displayed
	//place an image on the page and give it an id like "clicker"
	//create a function called onClick that adds 1 to the var clickCount whenever the image with the id "clicker" is clicked.

var clickCount = 0

document.getElementById("clicker").addEventListener('click', function() {
	if (upgradeOnePurchases >= 1) {
		clickCount += 2
	}
	else {
		clickCount += 1
	}
	document.getElementById("clickerCount").innerHTML = clickCount + " " + "Points"; 
})

//Step Two, The Upgrade Shop
	//
var upgradeOnePurchases = 0

 document.getElementById("upgradeOne").addEventListener('click', function() {
 	if (clickCount >= 25 && upgradeOnePurchases == 0) {
 		clickCount -= 25;
 		document.getElementById("clickerCount").innerHTML = clickCount + " " + "Points";
 		upgradeOnePurchases += 1;
 	}
 	else if (clickCount >= 50 && upgradeOnePurchases == 1) {
 		clickCount -= 50;
 		document.getElementById("clickerCount").innerHTML = clickCount + " " + "Points";
 		upgradeOnePurchases += 1;
 	}
 	else {
 		alert("You do not have enough points!");
 	}
 })
 document.getElementById("upgradeOne").onmouseover = function() {
 	document.getElementById('upgradeOneDescription').style.display = 'block';
 }
 document.getElementById("upgradeOne").onmouseout = function() {
 	document.getElementById('upgradeOneDescription').style.display = 'none';
 }


