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
  var offerPayment = document.querySelector('#offer__payment');
  var cashElements = document.querySelectorAll('.offer__item--cash');
  var cardElements = document.querySelectorAll('.offer__item--card');
  var corporateElements = document.querySelectorAll('.offer__item--corporate');

  var disabledTable = function (payment) {
    for (var i = 0; i < payment.length; i++) {
      var payElement = payment[i];
      payElement.classList.remove('offer__item--active');
      payElement.classList.add('offer__item--disabled');
    }
  }

  var activeTable = function (payment) {
    for (var i = 0; i < payment.length; i++) {
      var payElement = payment[i];
      payElement.classList.remove('offer__item--disabled');
      payElement.classList.add('offer__item--active');
    }
  }

  var option = function() {
    switch(offerPayment.value) {
      case 'cash':
        activeTable(cashElements);
        disabledTable(cardElements);
        disabledTable(corporateElements);
        break;

      case 'card':
        disabledTable(cashElements);
        activeTable(cardElements);
        disabledTable(corporateElements);
        break;

      case 'corporate':
        disabledTable(cardElements);
        disabledTable(cashElements);
        activeTable(corporateElements);
        break;
    }
  }
  option();
  offerPayment.addEventListener('change', function() {option();})
})();
