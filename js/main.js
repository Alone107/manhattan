
$('.kitchen__slider').slick({
});

$('.burger,.overlay').on('click', function (e) {
  e.preventDefault()
  $('.header__nav-list').toggleClass('header__nav-list--open')
  $('.overlay').toggleClass('overlay--show')
  $('.burger').toggleClass('active')
  $('body').toggleClass('scroll')
})


Fancybox.bind("[data-fancybox]", {
  // Your custom options
});
  
  

    