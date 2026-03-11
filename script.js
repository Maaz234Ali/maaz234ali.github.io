// smooth scrolling

document.querySelectorAll("a[href^='#']").forEach(anchor => {

anchor.addEventListener("click", function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href")).scrollIntoView({

behavior:"smooth"

});

});

});



// navbar background on scroll

window.addEventListener("scroll", function(){

let nav = document.querySelector(".navbar");

if(window.scrollY > 50){

nav.style.background = "#020617";

}else{

nav.style.background = "transparent";

}

});