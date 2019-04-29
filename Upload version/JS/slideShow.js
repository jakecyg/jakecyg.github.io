/*
    slideShow.js
    Creates slide show for index.html
    by allowing users to slide through headings back and forth.

    Jake Choi
    04.01.2019
*/

//Load the load function upon DOM content loaded.
document.addEventListener("DOMContentLoaded", load);
let currentSlide = 0;
let slides = document.getElementsByClassName("slides");

//Assign event listeners for each next and previous buttons.
function load()
{
  startSlideShow();

  let nextButton = document.getElementById("nextButton");
  nextButton.addEventListener("click", showNext);

  let previousButton = document.getElementById("prevButton");
  previousButton.addEventListener("click", showPrevious);
}

//Display none for all slide classes.
function restSlides() 
{
  for(let i = 0; i < slides.length; i++)
  {
     slides[i].style.display = "none";
  }
}

//Display block for the first slide class. 
function startSlideShow()
{
  restSlides();
  slides[0].style.display = "block";
}

//Display block for each next slide class in line.
function showNext()
{
  restSlides();
  if(currentSlide == slides.length -1 )
  {
    currentSlide = 0;
    slides[currentSlide].style.display = "block";
    // alert(currentSlide);
    
  }

  else
  {
    slides[currentSlide + 1 ].style.display = "block";
    currentSlide ++;
    // alert(currentSlide);
  }
  
}

//Display block for each previous slide class in line.
function showPrevious()
{
  restSlides();
  if(currentSlide == 0)
  {
    currentSlide = slides.length -1;
    slides[currentSlide].style.display = "block";
    // alert(currentSlide);
  }

  else
  {
    slides[currentSlide - 1 ].style.display = "block";
    currentSlide --;
    // alert(currentSlide);
  }


}




















