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

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> TRIAL



