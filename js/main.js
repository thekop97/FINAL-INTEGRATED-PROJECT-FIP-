(function(){
	"use strict";
	
	console.log("running");

	var button = document.querySelector("#button");
	var navContain = document.querySelector("#navContain");

	function hamburgerMenu() {
		navContain.classList.toggle("slideToggle");
		button.classList.toggle("expanded");
	}

	button.addEventListener("click", hamburgerMenu, false);
		
})();

var slideIndex = [1,1];
var slideId = ["Slide", "Slide2"]
showSlides(1, 0);
showSlides(1, 1);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}    
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex[no]-1].style.display = "block";  
}


function myFunction() {
  var elmnt = document.getElementById("extraContain");
  elmnt.scrollIntoView();
}

window.document.onkeydown = function(e) {
  if (!e) {
    e = event;
  }
  if (e.keyCode == 27) {
    lightbox_close();
  }
}

function box_open() {
  var lightBoxVideo = document.getElementById("promotion");
  window.scrollTo(0, 0);
  document.getElementById('light').style.display = 'block';
  document.getElementById('fade').style.display = 'block';
  lightBoxVideo.play();
}

function box_close() {
  var lightBoxVideo = document.getElementById("promotion");
  document.getElementById('light').style.display = 'none';
  document.getElementById('fade').style.display = 'none';
  lightBoxVideo.pause();
}


