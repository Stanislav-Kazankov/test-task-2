'use strict';

(function () {
  var accordeon = document.querySelector('.section__menu');
  var accordionItems = accordeon.querySelectorAll('.accordeon__item');

  for (var i = 0; i < accordionItems.length; i++) {
    var submenu = accordionItems[i].querySelector('.accordeon__submenu');

    if (submenu !== null) {
      var toggle = accordionItems[i].querySelector('.accordeon__toggle');
      toggle.style.display = (submenu.querySelector('.accordeon__item') !== null) ? 'block' : 'none';
      accordionItems[i].classList.toggle('accordeon__item--closed');
    }
  }

  accordeon.addEventListener('click', function (evt) {
    if (evt.target.classList.contains('accordeon__toggle')) {
      evt.target.parentNode.parentNode.classList.toggle('accordeon__item--closed');
    }
  });
})();
