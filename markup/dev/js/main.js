'use strict';

// sliders
function carouselInfo() {
    let carousel_info = new Swiper('.carousel-info', {
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        loop: true,
    });
}

carouselInfo();

// burger menu
$('.nav-opener').click(function () {
   $('.nav').toggleClass('nav-active');
   $('body').toggleClass('scroll-none');
});
//