// const mojs = require('mo-js');
import mojs from 'mo-js';

document.addEventListener('DOMContentLoaded', () => {
  // do your setup here
  var square = document.querySelector('#js-square');

  new mojs.Tween({
    repeat: 999,
    delay: 2000,
    onUpdate: function (progress) {
      square.style.transform = 'translateY(' + 200 * progress + 'px)';
    }
  }).play();
  console.log('Initialized app');
});