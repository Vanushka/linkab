
$(document).ready(function() {
  if ($(window).innerWidth() > 768) {    
    var mySwiper = new Swiper ('.logos-slider', {
      // Optional parameters
      loop: true,
      speed: 400,
      slidesPerView: 5,
      spaceBetween: 94,
      // Navigation arrows
      navigation: {
        nextEl: '.slide-next',
        prevEl: '.slide-prev',
      },
    });
  } else {
    var mySwiper = new Swiper ('.logos-slider', {
      // Optional parameters
      loop: true,
      speed: 400,
      slidesPerView: 2,
      spaceBetween: 40,
      // Navigation arrows
      navigation: {
        nextEl: '.slide-next',
        prevEl: '.slide-prev',
      },
    });
  }

  // BURGER
  $('.burger').click(() => {
    toggleMenu()
  });

  function toggleMenu() {
    $('body').toggleClass('loked');
    $('.burger').toggleClass('toggle');
    $('.nav-links').toggleClass('fade-in');
  }

  $(".nav-links").swipe( {
    swipeLeft: leftSwipe,
    threshold: 0
  });
  
  function leftSwipe(event){
    toggleMenu();
  }
  
  // COPYRIGHT IN FOOTER
  $('.copyright p span').text(new Date().getFullYear());
});