var Slider = document.querySelector(".idc-swiper"),
    mySwiper;

let InitSwiper = function (slider) {
    mySwiper = new Swiper(slider, {
        // Default parameters
        loop: true,
        direction: "horizontal",
        slidesPerView: 1,
        spaceBetween: 25,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        touchReleaseOnEdges: true,
        allowTouchMove: true,
        /*    grabCursor: true, */
        watchOverflow: true,
        grabCursor: true,

        pagination: {
            el: ".idc-swiper-pagination",
            type: "bullets",
            clickable: true,
        },
        navigation: {
            nextEl: ".idc-swiper-button-next",
            prevEl: ".idc-swiper-button-prev",

        },
    });
};

var mySwiper;
if (Slider) InitSwiper(Slider);
