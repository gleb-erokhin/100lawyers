import mobileNav from './modules/mobile-nav.js';
// mobileNav();

const swiper = new Swiper(".reviews-slider", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});