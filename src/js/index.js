/** Функции */
// функция закрытия бургер меню через ESC
function closeBurger() {
    nav.classList.remove('mobile-nav--open');
    overlay.classList.remove('mobile-nav-overlay--show');
    menuIcon.classList.remove('nav-icon--active');
}

function closeModal() {
    modal.classList.remove('modal--open');
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



// модальное окно для логона - вход / регистрация
const modalLogon = document.querySelector('[data-modal-logon="modal-logon"]');
const modalLogonBtns = document.querySelectorAll('[data-modal-logon="logon"]');
const modalLogonClose = document.querySelector('[data-modal-logon="close"]');
const modalLogonBody = document.querySelector('.modal-logon__body');

/** работаем над открытием модального окна */
modalLogonBtns.forEach(function (item) {
    item.addEventListener('click', function () {
        if (item.closest('.mobile-nav__header')) {
            nav.classList.remove('mobile-nav--open');
            overlay.classList.remove('mobile-nav-overlay--show');
            menuIcon.classList.remove('nav-icon--active');

            modalLogon.classList.add('modal-logon--open');
            document.body.classList.add('no-scroll');
        } else {
            // открываем модалку добавляя к ней класс modal--open
            modalLogon.classList.add('modal-logon--open');
            // чтобы страница не крутилась во время открытия модалки
            document.body.classList.add('no-scroll');
        }
    });
});

// закрытие модального окна
modalLogonClose.addEventListener('click', closeModalLogon);

/** Закрытие модального окна по поле затемнению */
modalLogon.addEventListener('click', closeModalLogon);

/** Отключаем поднятие клика чтобы при нажатии внутри модального окна она не закрывалась */
modalLogonBody.addEventListener('click', function (event) {
    event.stopPropagation();
});


// Модальное окно заказать звонок, учитывает обе формы как в десктоп так и в мобильной версии
const modalQst = document.querySelectorAll('[data-question="question"]');
const modal = document.querySelector('.modal');
const modalBody = document.querySelector('.modal__body');
const modalClBtn = document.querySelector('.modal__close');

modalQst.forEach(function(item) {
    item.addEventListener('click', function() {
        nav.addEventListener('click', closeBurger);
        modal.classList.add('modal--open');
        document.body.classList.add('no-scroll');
    })
})

modal.addEventListener('click', closeModal);
modalClBtn.addEventListener('click', closeModal);
modalBody.addEventListener('click', function (event) {
    event.stopPropagation();
});