
$(document).ready(showSlides);



var slideIndex = 0;
showSlides();

function showSlides() {

$("p").hide();	
$("h2").hover(appear);
	
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 4000); // Change image every 4 seconds
  
  
    $("h2").click(clickSubmit);
   
    $("p").hover(appear);
}




function clickSubmit(event){
 $("p").show();

}
function disappear(event){
$("h1").hide()

}
function appear(event){
$("h1").show()
}

