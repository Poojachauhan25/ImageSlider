let images = ["images/1.jpg", "images/2.jpg", "images/3.jpg", "images/4.jpg", "images/5.jpg"];
let index = 0;
let slide = document.getElementById("slide");

function nextSlide() {
    index = (index + 1) % images.length;
    slide.src = images[index];
}

// Auto-slide every 3 seconds
setInterval(nextSlide, 3000);
