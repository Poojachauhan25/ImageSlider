let images = ["images/1.jpg", "images/2.jpg", "images/3.jpg", "images/4.jpg", "images/5.jpg"];
let index = 0;
let slide = document.getElementById("slide");
let dotsContainer = document.querySelector(".dots-container");

// Create dots dynamically
images.forEach((_, i) => {
    let dot = document.createElement("div");
    dot.classList.add("dot");
    dot.addEventListener("click", () => goToSlide(i));
    dotsContainer.appendChild(dot);
});
let dots = document.querySelectorAll(".dot");

function updateSlide() {
    slide.src = images[index];
    dots.forEach((dot, i) => dot.classList.toggle("active", i === index));
}

// Next & Previous Buttons
document.getElementById("nextBtn").addEventListener("click", () => {
    nextSlide();
    resetAutoSlide();
});

document.getElementById("prevBtn").addEventListener("click", () => {
    prevSlide();
    resetAutoSlide();
});

// Functions for Navigation
function nextSlide() {
    index = (index + 1) % images.length;
    updateSlide();
}

function prevSlide() {
    index = (index - 1 + images.length) % images.length;
    updateSlide();
}

function goToSlide(i) {
    index = i;
    updateSlide();
    resetAutoSlide();
}

// Auto-Slideshow Functionality
let autoSlide = setInterval(nextSlide, 2000);

function resetAutoSlide() {
    clearInterval(autoSlide);
    autoSlide = setInterval(nextSlide, 2000);
}

// Pause Auto-Slide on Hover
document.querySelector(".slider-container").addEventListener("mouseenter", () => clearInterval(autoSlide));
document.querySelector(".slider-container").addEventListener("mouseleave", resetAutoSlide);

// Initialize
updateSlide();