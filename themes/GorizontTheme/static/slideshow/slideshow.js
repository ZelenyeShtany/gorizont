var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
    clearInterval(interval);
    interval = setInterval(function(){ showSlides(++slideIndex) }, 5000);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
    clearInterval(interval);
    interval = setInterval(function(){ showSlides(++slideIndex) }, 5000);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
	slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
	dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "flex";
    dots[slideIndex-1].className += " active";
}

// automatically show next slide every 2 seconds
var interval = setInterval(function(){ showSlides(++slideIndex) }, 3000);


document.getElementsByClassName("dot-container")[0].style.display = "block";
document.getElementsByClassName("prev")[0].style.display = "inline-flex";
document.getElementsByClassName("next")[0].style.display = "inline-flex";
