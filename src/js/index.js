/** Функции */
// функция закрытия бургер меню через ESC
function closeBurger() {
    nav.classList.remove('mobile-nav--open');
    overlay.classList.remove('mobile-nav-overlay--show');
    menuIcon.classList.remove('nav-icon--active');
    document.body.classList.remove('no-scroll');
}

// закрытие бургер меню через ESC
function escCloseBtn(event) {
    if (event.key == 'Escape') {
        closeBurger();
    }
}

// Mobile nav button
const navBtn = document.querySelector('.mobile-nav-btn');
const nav = document.querySelector('.mobile-nav');
const overlay = document.querySelector('.mobile-nav-overlay');
const menuIcon = document.querySelector('.nav-icon');

navBtn.onclick = function () {
    nav.classList.toggle('mobile-nav--open');
    overlay.classList.toggle('mobile-nav-overlay--show');
    menuIcon.classList.toggle('nav-icon--active');
    document.body.classList.toggle('no-scroll');
};

/** Закрываем бургер меню по кнопке ESC */
document.addEventListener('keydown', escCloseBtn);

/** Закрытие модалки по поле затемнению */
overlay.addEventListener('click', closeBurger);

/* открыть / закрыть Модальный поиск в мобильной версии */
const modalSearch = document.querySelector('[data-modal-search="modal-search"]')
const modalSearchBtn = document.querySelector('[data-modal-search="modal-search-btn"]')
const modalCloseBtn = document.querySelector('[data-modal-search="modal-search-close"]')

modalSearchBtn.addEventListener('click', function() {
    modalSearch.classList.add('show');
})
modalCloseBtn.addEventListener('click', function() {
    modalSearch.classList.remove('show');
})



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