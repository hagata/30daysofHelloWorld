// const mojs = require('mo-js');
import mojs from 'mo-js';
import MojsPlayer from 'mojs-player';

document.addEventListener('DOMContentLoaded', () => {
  // do your setup here
  var square = document.querySelector('#js-square');

  let tweens = {}
  tweens.square = new mojs.Tween({
    onUpdate: function (progress) {
      square.style.transform = 'translateY(' + 200 * progress + 'px)';
    }
  });

  let tl = new mojs.Timeline({
    repeat:10,
    isYoyo: true
  })

  tl
    .add(tweens.square)
    // .play()

  const mojsPlayer = new MojsPlayer({ add: tl });
  console.log('Initialized app');
});