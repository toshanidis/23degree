$(function () {
  $(document).on('click', '.portfolio__btn', function () {
    $(this).addClass('portfolio__btn--active').siblings().removeClass('portfolio__btn--active');
  });

  $('.company__slider-wrapper').slick({
    dots: true,
    arrows: false,
    slidesToShow: 7,
    slidesToScroll: 1
  });

  $('.header__menu-icon').on('click', function(event) {
    $('.header__menu').toggleClass('header__menu--active');
  });

  

  $('.header__menu').on('click','a', function (event) {
      event.preventDefault();
      var id  = $(this).attr('href'),
          top = $(id).offset().top;
      $('body,html').animate({scrollTop: top}, 1500);
  });

  
      
  var mixer = mixitup('.portfolio__content');   
});






