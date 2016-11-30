// const mojs = require('mo-js');
import mojs from 'mo-js';
import MojsPlayer from 'mojs-player';

document.addEventListener('DOMContentLoaded', () => {
  const tweens = {}

  // Shapes
  const pos = {
    row1: '35%',
    row2: '65%',
    col1: '20%',
    col2: '40%',
    col3: '60%',
    col4: '80%'
  };
  const zigzag = new mojs.Shape({
    shape: 'zigzag',
    points: 7,
    radius: 25,
    radiusY: 50,
    top: pos.row1,
    left: pos.col1,
    fill: 'none',
    stroke: '#c159b0',
    isShowStart: true,
  });

  // Setup custom shape.
  // const heart;

  // tweens

  let square = document.querySelector('#js-square');
  tweens.square = new mojs.Tween({
    onUpdate: function (progress) {
      square.style.transform = 'translateY(' + 200 * progress + 'px)';
    }
  });

  class Heart extends mojs.Shape {
    geShape() {
      return '<path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>'
    }
  }

  mojs.addShape('heart', Heart )

  const heart1 = new mojs.Shape({
    shape: 'heart',
    top: pos.row1,
    left: pos.col1,
    fill: '#c159b0',
    stroke: '#c159b0',
    isShowStart: true,
  })




  let mainTimeline = new mojs.Timeline({
    repeat: 10,
    isYoyo: true
  })

  mainTimeline
    .add(tweens.square)
    // .play()


  // Put everything into the Player.
  new MojsPlayer({
    add: mainTimeline
  });
  console.log('Initialized app');
});