// Responsive video embeds
var videoEmbeds = [
  'iframe[src*="youtube.com"]',
  'iframe[src*="vimeo.com"]'
];
reframe(videoEmbeds.join(','));

// Mobile menu
var menuToggle = document.querySelectorAll('.menu-toggle, #main-navigation .menu-item');

for (var i = 0; i < menuToggle.length; i++) {
  menuToggle[i].addEventListener('click', function(e){
    document.body.classList.toggle('menu--opened');
  },false);
}

document.body.classList.remove('menu--opened');

window.addEventListener('resize', function () {
  if (menuToggle[0].offsetParent === null) {
    document.body.classList.remove('menu--opened');
  }
}, true);

// Accordion
var faqAccordions = document.querySelectorAll('.handorgel');
Array.from(faqAccordions).forEach((faqAccordion) => {
  var accordion = new handorgel(faqAccordion, {
    multiSelectable: true
  });
});

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("myHeader");

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