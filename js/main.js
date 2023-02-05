$(document).ready(function () {
  $(".sliders").slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow: "<button type='button' class='btn-slick-prev btn btn-slider'><img src='images/icons/left-arrow.svg' alt='left-arrow'></button>",
    nextArrow: "<button type='button' class='btn-slick-next btn btn-slider'><img src='images/icons/right-arrow.svg' alt='right-arrow'></button>"
  });
});