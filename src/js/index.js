const swiper = new Swiper(".reviews-slider", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// Mobile nav button
const navBtn = document.querySelector('.mobile-nav-btn');
const nav = document.querySelector('.mobile-nav');
const menuIcon = document.querySelector('.nav-icon');

navBtn.onclick = function () {
    nav.classList.toggle('mobile-nav--open');
    menuIcon.classList.toggle('nav-icon--active');
    document.body.classList.toggle('no-scroll');
};