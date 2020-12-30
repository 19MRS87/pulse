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
// let slideIndex = 1;
// showSlides(slideIndex);
// function plusSlides(n) {
//     showSlides(slideIndex += n);
// }
// function currentSlide(n) {
//     showSlides(slideIndex = n);
// }
// function showSlides(n) {
//     let i;
//     let slides = document.getElementsByClassName("carousel__inner");
//     let dots = document.getElementsByClassName("dots");

//      if (n > slides.length) {
//         slideIndex = 1
//     }

//     if (n < 1) {
//         slideIndex=slides.length
//     }
//     for (i = 0; i < slides.length; i++){
//         slides[i].style.display = "none";
//     }
//     for (i = 0; i < dots.length; i++){
//       dots[i].className = dots[i].className.replace("active","");
//     }
//     slides[slideIndex - 1].style.display = "block";
//     dots[slideIndex - 1].className += "active";
// }
let i = 0;
let images = [];
let time = 2000;
 images[0] = 'cl1.jpg';
 images[1] = 'cl2.jpg';
 images[2] = 'cl3.jpg';
function changeImg() {
    document.carousel__inner.src = images[i];

    if (i < images.length - 1) {
        i++;
    }
    else {
        i = 0;
    }
    setTimeout("changeImg()", time);
}
window.onclick = changeImg;


