
$(document).ready(function () {
   $('.carousel__inner').slick({
      speed: 1200,
      adaptiveHeight: true,
      prevArrow: '<button type="button" class="slick-prev" ><img src="icons/arr_left.png"></img></button>',
      nextArrow: '<button type="button" class="slick-next" ><img src="icons/arr_right.png"></img></button>',
      dotsClass: 'slick-dots',
      responsive: [
         {
            breakpoint: 992,
            settings: {
               arrows: false,
               dots: true,
            }
         },
         {
            breakpoint: 480,
            settings: {
               arrows: false,
               centerMode: true,
               centerPadding: '40px',
               slidesToShow: 1
            }
         }
      ]
   });
});
