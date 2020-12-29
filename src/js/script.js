// $(document).ready(function(){
//     $('.carousel__inner').slick({
//         speed: 1200,
//         // adaptiveHeight: true,
//         prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.png"></button>',
//         nextArrow: '<button type="button" class="slick-next"><img src="icons/right.png"></button>',
//         responsive: [
//             {
//             breakpoint: 992,
//             settings: {
//                 dots: true,
//                 arrows:false
//             }
//         }   
//         ]
//     });
// });
let slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
    showSlides(slideIndex += n);
}
function currentSlide(n) {
    showSlides(slideIndex = n);
}
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("carousel__inner");
    let dots = document.getElementsByClassName("dots");

     if (n > slides.length) {
        slideIndex = 1
    }

    if (n < 1) {
        slideIndex=slides.length
    }
    for (i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++){
      dots[i].className = dots[i].className.replace("active","");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += "active";
}