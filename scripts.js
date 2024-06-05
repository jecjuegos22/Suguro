// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> NAV STICKY


window.addEventListener('scroll', stickyHeader);

var header = document.querySelector(".second-nav");

function stickyHeader() {
  var sticky = header.offsetTop; // Recalculate sticky offset each time
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

document.addEventListener('DOMContentLoaded', function() {
  stickyHeader();
});

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> SEARCHBAR

function search() {
  var query = document.getElementById("searchInput").value;
  if (query.trim() !== "") {
      // Redirect to search results page passing the query as URL parameter
      window.location.href = "search_results.html?q=" + encodeURIComponent(query);
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
  }, 5000); // Interval set to 5000 milliseconds (5 seconds)
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

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> ChangeBG

function changeBG() {
  var checkbox = document.getElementById('check');
  if (checkbox.checked) {
      document.body.style.backgroundImage = 'url(background-image11.jpg)';
  } else {
      document.body.style.backgroundImage = 'url(background-image10.jpg)';
  }
}

// Add event listener after DOM content is loaded
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('check').addEventListener('change', changeBG);
});

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> SLIDING

window.addEventListener('scroll', function() {
    
  const elements = document.querySelectorAll('#slidefirst, #slidesecond');
  const viewportHeight = window.innerHeight;
  // console.log(window.scrollY)

  elements.forEach(element => {
      console.log(window.scrollY)
      if (window.scrollY >= 750 && window.scrollY <= 1500) {
          element.classList.add('visible');
      } else {
          element.classList.remove('visible');
      }
  });
});

window.addEventListener('scroll', function() {
  
  const elements = document.querySelectorAll('#slidethird, #slidefourth');
  const viewportHeight = window.innerHeight;
  // console.log(window.scrollY)

  elements.forEach(element => {
      console.log(window.scrollY)
      if (window.scrollY >= 1050 && window.scrollY <= 1700) {
          element.classList.add('visible');
      } else {
          element.classList.remove('visible');
      }
  });
});



// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> TRIAL


