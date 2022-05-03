
// calcHeight("picture");

//CODE FOR "PICTURE_LIST" VISIBILE ELEMENTS

function dropList() {

  var x = document.getElementById("list");
  var wrap = document.getElementById("picture");

  if (x.style.display === "flex") {
    x.style.display = "none";
    wrap.style.height = 'calc(100vh - ' +  document.querySelector('.header').offsetHeight + 'px)';
  } else {
    x.style.display = "flex";
    wrap.style.height = "100%";
  }
}

// CODE FOR SLIDESHOW

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
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
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

//CODE FOR .PICTURE RESPONSIVE HEIGHT VIA CONTENT AND VH

const mediaQuery = window.matchMedia('(min-width: 960px)')

function desktopChange(e) {

  var section = document.getElementById('item');

  if (e.matches) {
    section.style.height = '100%';
  }
  // } else {
  //   section.style.height = 'calc(100vh - ' +  document.querySelector('.header').offsetHeight + 'px)';
  // }
}

mediaQuery.addListener(desktopChange)
desktopChange(mediaQuery)
