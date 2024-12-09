// swiper slider
var swiper = new Swiper(".reviews-slider", {
    // slidesPerView: 3,
    // spaceBetween: 30,
    navigation: {
        nextEl: ".slider-button-next",
        prevEl: ".slider-button-prev",
    },
    breakpoints: {
        576: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        991: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1199: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
    },
});