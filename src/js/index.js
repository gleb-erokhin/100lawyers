/** Функции */
// функция закрытия бургер меню через ESC
function closeBurger() {
    nav.classList.remove('mobile-nav--open');
    overlay.classList.remove('mobile-nav-overlay--show');
    menuIcon.classList.remove('nav-icon--active');
    document.body.classList.remove('no-scroll');
}

function closeModalLogon() {
    modalLogon.classList.remove('modal-logon--open');
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



/* открыть / закрыть, Модальный поиск в мобильной версии */
const modalSearch = document.querySelector('[data-modal-search="modal-search"]')
const modalSearchBtn = document.querySelector('[data-modal-search="modal-search-btn"]')
const modalCloseBtn = document.querySelector('[data-modal-search="modal-search-close"]')

modalSearchBtn.addEventListener('click', function () {
    modalSearch.classList.add('show');
})
modalCloseBtn.addEventListener('click', function () {
    modalSearch.classList.remove('show');
})



// модальное окно для логона
const modalLogon = document.querySelector('[data-modal-logon="modal-logon"]');
const modalLogonBtn = document.querySelector('[data-modal-logon="logon"]');
const modalLogonClose = document.querySelector('[data-modal-logon="close"]');
const modalBody = document.querySelector('.modal-logon__body');

// активация модального окна по кнопке
modalLogonBtn.addEventListener('click', function () {
    modalLogon.classList.add('modal-logon--open');
    document.body.classList.add('no-scroll');
})

// закрытие модального окна
modalLogonClose.addEventListener('click', closeModalLogon);

/** Закрытие модального окна по поле затемнению */
modalLogon.addEventListener('click', closeModalLogon);

/** Отключаем поднятие клика чтобы при нажатии внутри модального окна она не закрывалась */
modalBody.addEventListener('click', function (event) {
    event.stopPropagation();
});