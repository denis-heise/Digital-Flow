const contentHeader = document.querySelector('.header-content');
const headerIcon = contentHeader.querySelector('.header-content__icon-header');
const burger = document.querySelector('.header-content__burger-menu-strip');
const close = document.querySelector('.header-content__close-menu');
const menu = document.querySelector('.header-content__burger-menu-header');
const burgerSpanFirst = burger.querySelector('.header-content__spanMenuFirst');
const burgerSpanSecond = burger.querySelector('.header-content__spanMenuSecond');
const burgerSpanThird = burger.querySelector('.header-content__spanMenuThird');
const icons = document.querySelector('.header-content__burger-menu-icons');
const firstButton = document.querySelector('.container-content-first__button');
const specialOffer = document.querySelector('.header-content__special-offer');
const buttonOrder = specialOffer.querySelector('.header-content__button-order');
const offerVariant = specialOffer.querySelector('.header-content__special-offer-variant');
const linksMenu = document.querySelectorAll('.header-content__burger-menu-list');
const bodyPage = document.querySelector('body');

contentHeader.addEventListener('mouseover', function () {
    contentHeader.classList.add('activeHeaderContent');
    burgerSpanFirst.classList.add('activeBurger');
    burgerSpanSecond.classList.add('activeBurger');
    burgerSpanThird.classList.add('activeBurger');
    headerIcon.setAttribute('src', '/img/icons/header/icon-white.svg')
})
contentHeader.addEventListener('mouseout', function () {
    contentHeader.classList.remove('activeHeaderContent');
    burgerSpanFirst.classList.remove('activeBurger');
    burgerSpanSecond.classList.remove('activeBurger');
    burgerSpanThird.classList.remove('activeBurger');
    headerIcon.setAttribute('src', '/img/icons/header/icon-black.svg')
})

specialOffer.addEventListener('mouseover', function () {
    buttonOrder.classList.add('active');
    offerVariant.classList.add('active');
})
specialOffer.addEventListener('mouseout', function () {
    buttonOrder.classList.remove('active');
    offerVariant.classList.remove('active');
})

burger.addEventListener('click', function() {
    burger.classList.add('active');
    menu.classList.add('active');
    burgerSpanFirst.classList.add('active');
    burgerSpanSecond.classList.add('active');
    burgerSpanThird.classList.add('active');
    close.classList.add('active');
    icons.classList.add('active');
    bodyPage.classList.add('lock')
})


const closeMenu = (item) =>
    item.addEventListener('click', function() {
    burger.classList.remove('active');
    menu.classList.remove('active');
    burgerSpanFirst.classList.remove('active');
    burgerSpanSecond.classList.remove('active');
    burgerSpanThird.classList.remove('active');
    icons.classList.remove('active');
    bodyPage.classList.remove('lock')
})
linksMenu.forEach(element => closeMenu(element));
closeMenu(close);
closeMenu(buttonOrder);