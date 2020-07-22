'use strict';

(function () {
  var accordeon = document.querySelector('.section__menu');

  var level1ItemTops = accordeon.querySelectorAll('.accordeon__item-top--level1');

  for (var i = 0; i < level1ItemTops.length; i++) {
    var level1Item = level1ItemTops[i].parentNode;
    if (level1Item.querySelector('.accordeon__item') === null) {
      level1Item.classList.add('accordeon__item--blank');
    }
  }

  var accordeonItems = accordeon.querySelectorAll('.accordeon__item');

  var submenus = accordeon.querySelectorAll('.accordeon__submenu');

  for (var i = 0; i < submenus.length; i++) {
    var parentItem = submenus[i].parentNode;
    parentItem.classList.add('accordeon__item--closed');
    var toggle = parentItem.querySelector('.accordeon__toggle');
    toggle.style.display = (submenus[i].hasChildNodes()) ? 'block' : 'none';
  }

  accordeon.addEventListener('click', function (evt) {
    if (evt.target.classList.contains('accordeon__toggle')) {
      evt.target.parentNode.parentNode.classList.toggle('accordeon__item--closed');
    }
  });
})();
