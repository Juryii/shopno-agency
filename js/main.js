// $(document).ready(function () {
//   $('.about-us__slider').slick(
//     {
//       dots: true,
//       accessibility: false,
//       // autoplay: true,
//       arrows: false,
//       adaptiveHeight: true,
//       // centerMode: true,
//       // centerPadding: '60px',
//     }
//   );
// });
$(document).ready(function () {
  $('.our-services__card-btn').click(function(event ) {
    $(event.target).closest('.our-services__card').addClass('active');

  });
  $('.close-more-btn').click(function(event ) {
    $(event.target).closest('.our-services__card').removeClass('active');

  });
});