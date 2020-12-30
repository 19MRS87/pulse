$(document).ready(function () {
    $('.carousel__inner').slick({
        speed: 1200,
        prevArrow: '<button type="button" class="slick-prev"><img src="../icons/left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../icons/right.png"></button>',
        responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        arrows: false
      }
    },
       {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        arrows: false
      }
    },
            
    {
      breakpoint: 576,
      settings: {
        arrows: false,
        slidesToShow: 1,
      }
    },
    
     {
      breakpoint: 375,
      settings: {
        arrows: false,
        slidesToShow: 1,
      }
    }

    
  ]
    });
});