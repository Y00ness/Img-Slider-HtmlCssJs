const carousalSlide = document.querySelector(".carousel-slide");
const carouselImages = document.querySelectorAll(".carousel-slide img");

// btn
const prevBtn = document.querySelector("#Prev-BTN");
const nextBtn = document.querySelector("#Next-BTN");

// Counter
let counter = 1;
const size = carouselImages[0].clientWidth;

carousalSlide.style.transform = "translateX(" + -size * counter + "px)";
