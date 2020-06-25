$(document).ready(function () {
  $('.our-services__card-btn').click(function(event ) {
    $(event.target).closest('.our-services__card').addClass('active');

  });
  $('.close-more-btn').click(function(event ) {
    $(event.target).closest('.our-services__card').removeClass('active');

  });
  $('.slider-they-say__user-avatar').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.slider-they-say__user-desc-slider',
    dots: true
  });
  $('.slider-they-say__user-desc-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    asNavFor: '.slider-they-say__user-avatar',
    centerMode: true,
    focusOnSelect: true
  });
  $('.about-us__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true
  });
});