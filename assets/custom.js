$("body").on("click", ".close-btn, .popup-overlay", function(){
  $(".popup-wrapper").hide();
  $("body").removeClass("overflow");
  $(".quickView-popup .popup-img").empty();
  $(".quickView-popup .popup-text-wraper").empty();
});  

$("body").on("click", "li.pop-up-slider", function(event){
  event.preventDefault();
  event.stopPropagation();
  var productData = $(this).find(".quickView-product-json").html();
  var productJson = JSON.parse(productData);
  //console.log(productJson);
  var productTitle = productJson.title;
  var productImage = productJson.featured_image;
  var productDescription = productJson.description;
  var descriptionHtml = `<h2 class="email-head">${productTitle}</h2>
<div>${productDescription}</div>
	`;
  $(".quickView-popup .popup-img").append("<img src='"+productImage+"' alt='"+productTitle+"'>");
  $(".quickView-popup .popup-text-wraper").append(descriptionHtml);
  $(".popup-wrapper").addClass("loading");
  $(".popup-wrapper").show();
  $("body").addClass("overflow");
  setTimeout(function(){
    $(".popup-wrapper").removeClass("loading");
  }, 1000);
});
 
if($('.new_slider').length > 0) {
$('.new_slider').slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  
  ]
});
};
