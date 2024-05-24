// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> NAV STICKY

window.onscroll = function() {stickyHeader()};

var header = document.querySelector(".second-nav");
var sticky = header.offsetTop;

function stickyHeader() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> CAROUSEL

let currentIndex = 0;
const slides = document.querySelectorAll('.carousel-slide');
const totalSlides = slides.length;

function changeSlide(direction) {
  currentIndex = (currentIndex + direction + totalSlides) % totalSlides;
  updateCarousel();
}

function goToSlide(index) {
  currentIndex = index;
  updateCarousel();
}

function updateCarousel() {
  const offset = -currentIndex * 100;
  document.querySelector('.carousel-container').style.transform = `translateX(${offset}%)`;
}

function startSlideInterval() {
  slideInterval = setInterval(() => {
      changeSlide(1); // Move to the next slide
  }, 15000); // Interval set to 5000 milliseconds (5 seconds)
}

function stopSlideInterval() {
  clearInterval(slideInterval);
}

// Start the slide interval when the page loads
document.addEventListener('DOMContentLoaded', () => {
  startSlideInterval();
});

// Stop the slide interval when the user interacts with the carousel (clicks prev/next buttons)
document.querySelectorAll('.carousel-button').forEach(button => {
  button.addEventListener('click', () => {
      stopSlideInterval();
      startSlideInterval(); // Restart the interval after user interaction
  });
});

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> TRIAL


