/*
    HambergerSlide.js
    Adds on/off functionality to the hamburger menu icon
    by adding click event listener.

    Jake Choi
    04.01.2019
*/
 
//Call the load function upon DOM content loaded. 
document.addEventListener("DOMContentLoaded", load);
window.onscroll = function() {scrollFunction()};

function load()
{
	let burgerButton = document.getElementById("burgerButton");
	burgerButton.addEventListener("click", slideOut);

	let closeBurgerButton = document.getElementById("closeBurgerButton");
	closeBurgerButton.addEventListener("click", slideIn);

	let backToTopButtom = document.getElementById("topButton")
	backToTopButtom.addEventListener("click", scrollTop);
}

//Display block/none depending on the position of the scroll bar.
function scrollFunction()
{
	if (document.documentElement.scrollTop > 0) 
	{
    	slideIn();
  	} 

	if (document.documentElement.scrollTop <= 50) 
	{
    	document.getElementById("topButton").style.display = "none";
  	} 

  	else 
  	{
    	document.getElementById("topButton").style.display = "block";
  	}
}

//Set the attributes of the first section tag to be visible in the content area.
function slideOut()
{
	let giveToggleClass = document.getElementsByTagName("section")[0];
	giveToggleClass.setAttribute("class", "menuBarOn");
}

//Set the attributes of the first section tag to be none-visible in the content area.
function slideIn()
{
	let giveToggleClass = document.getElementsByTagName("section")[0];
	giveToggleClass.setAttribute("class", "menuBar");
}

//Add click event listener to the back to top button.
function scrollTop() 
{
	document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}



