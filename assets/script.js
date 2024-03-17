const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

let changeSlide = document.getElementsByClassName("banner-img")[0];
let changeText = document.getElementsByClassName("tag-line")[0];
let nbrElement = slides.length;
let index = 0;
let arrowLeft = document.querySelector(".arrow_left");
console.log(arrowLeft);
let arrowRight = document.querySelector(".arrow_right");
console.log(arrowRight);
let bullets = document.getElementsByClassName("dot");

arrowRight.addEventListener("click", function () {
	bullets[index].classList.remove("dot_selected");
  if (index < nbrElement - 1) {
    index++;
  } else {
    index = 0;
  }
  changeSlide.src = "./assets/images/slideshow/" + slides[index].image;
  changeText.innerHTML = slides[index].tagLine;
  bullets[index].classList.add("dot_selected");
  
  console.log("click right");

  console.log("selected bullet" + index);
});
arrowLeft.addEventListener("click", function () {
	bullets[index].classList.remove("dot_selected");
  
  if (index < nbrElement && index > 0) {
    index--;
	
  } else {
	
    index = nbrElement - 1;
	
  }
  changeSlide.src = "./assets/images/slideshow/" + slides[index].image;
  changeText.innerHTML = slides[index].tagLine;
  bullets[index].classList.add("dot_selected");
});
