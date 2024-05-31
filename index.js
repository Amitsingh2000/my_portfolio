$(document).ready(function() {
  // Smooth scrolling when clicking on navbar links
  $('a.nav-link').on('click', function(event) {
    if (this.hash !== '') {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800); // Adjust the scroll speed as desired
    }
  });
   // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Student", "Fresher", "Full Stack Developer", "Programmer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

});
function downloadcv()
		{
			window.location.href = 'https://github.com/Amitsingh2000/my_portfolio/blob/main/Amit_Pardeshi_2024.pdf';
		}
