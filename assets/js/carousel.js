let counter = 0;
let slide = document.querySelector('.carousel-slide');
let images = document.querySelectorAll('.carousel-slide img');

document.querySelector('.next').addEventListener('click', nextSlide);
document.querySelector('.prev').addEventListener('click', prevSlide);

function nextSlide() {
  counter = (counter + 1) % images.length;
  slide.style.transform = `translateX(${-counter * 100}%)`;
}

function prevSlide() {
  counter = (counter - 1 + images.length) % images.length;
  slide.style.transform = `translateX(${-counter * 100}%)`;
}

// Auto-play
setInterval(nextSlide, 5000);
