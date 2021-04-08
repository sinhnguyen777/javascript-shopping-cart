$(document).ready(function () {
  $('.banner_slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.thum'
  });
  $('.banner_slider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.thum',
      dots: true,
      centerMode: true,
      focusOnSelect: true
    });
});

$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})