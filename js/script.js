"use strict";

/* -------------------------------------------------
   1) SCROLL-OBSERVER: Tildel .show-animate ved scroll
--------------------------------------------------- */
const sections = document.querySelectorAll("section");

// Overvåg scroll og aktiver .show-animate på sektioner
window.onscroll = () => {
  sections.forEach((sec) => {
    const scrollDistance = window.scrollY;
    const secDistance = sec.offsetTop;

    if (scrollDistance >= secDistance) {
      sec.classList.add("show-animate");
    } else {
      sec.classList.remove("show-animate");
    }
  });
};

/* -------------------------------------------------
   2) HOVER-EFFEKT PÅ FØRSTE SEKTION (eksempel)
--------------------------------------------------- */
const sectionOne = document.querySelector(".sec1");

if (sectionOne) {
  sectionOne.addEventListener("mouseover", function () {
    this.classList.add("scale");
  });

  sectionOne.addEventListener("mouseout", function () {
    this.classList.remove("scale");
  });
}


// NYT NYT Vanilla JS

const soundCar = new Audio("../sound/car-engine-sound.mp3");

const car1 = document.querySelector("#car1");
const car2 = document.querySelector("#car2");
const car3 = document.querySelector("#car3");

if (car1) {
   car1.addEventListener("click", function() {
      soundCar.play();
      car1.classList.toggle("flipped");
   });
}

if (car2) {
   car2.addEventListener("click", function() {
      soundCar.play();
      car2.classList.toggle("flipped");
   });
}

if (car3) {
   car3.addEventListener("click", function() {
      soundCar.play();
      car3.classList.toggle("flipped");
   });
}