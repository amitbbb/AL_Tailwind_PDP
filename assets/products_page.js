$(function(){
if($('#pdp-main-slider').length > 0) {
    $('#pdp-main-slider').slick({
      dots: false, 
      infinite: false,
      speed: 700,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      vertical: true
    });
};
});