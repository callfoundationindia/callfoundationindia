// Sticky header
var offsetY = 0;
var ticking = false;

window.addEventListener('scroll', function (e) {
  offsetY = window.scrollY;
  if (!ticking) {
    window.requestAnimationFrame(function () {
      handleHeader(offsetY);
      ticking = false;
    });
    ticking = true;
  }
});

function handleHeader(scrollPos) {
  if (scrollPos > 0) {
    document.body.classList.add('has--scrolled');
  } else {
    document.body.classList.remove('has--scrolled');
  }
}

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("masthead");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}