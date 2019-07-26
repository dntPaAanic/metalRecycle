"use strict";
(function() {
  // Меню
  var navMain = document.querySelector('.main-nav');
  var navToggle = document.querySelector('.main-nav__toggle');

  navMain.classList.remove('main-nav--nojs');

  navToggle.addEventListener('click', function() {
    if (navMain.classList.contains('main-nav--closed')) {
      navMain.classList.remove('main-nav--closed');
      navMain.classList.add('main-nav--opened');
    } else {
      navMain.classList.add('main-nav--closed');
      navMain.classList.remove('main-nav--opened');
    }
  });
//Кнопка наверх
  function trackScroll() {
    var scrolled = window.pageYOffset;
    var coords = document.documentElement.clientHeight;

    if (scrolled > coords) {
      goTopBtn.classList.add('back-to-top--show');
    }
    if (scrolled < coords) {
      goTopBtn.classList.remove('back-to-top--show');
    }
  }

  function backToTop() {
    if (window.pageYOffset > 0) {
      window.scrollBy(0, -80);
      setTimeout(backToTop, 0);
    }
  }

  var goTopBtn = document.querySelector('.back-to-top');

  window.addEventListener('scroll', trackScroll);
  goTopBtn.addEventListener('click', backToTop);



  //Таблица
  var cashId = document.querySelector('#cash');
  var cardId = document.querySelector('#card');
  var cashElements = document.querySelectorAll('.offer__item--cash');
  var cardElements = document.querySelectorAll('.offer__item--card');
  var corporateElements = document.querySelectorAll('.offer__item--corporate');
if (cashId) {
for (var i = 0; i < cardElements.length; i++) {
var cashElement = cashElements[i];
cashElement.classList.add('offer__item--card-disabled');
}


}

})();
