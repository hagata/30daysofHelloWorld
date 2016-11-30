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


  // // tween on normal DOM elements
  //
  // let square = document.querySelector('#js-square');
  // tweens.square = new mojs.Tween({
  //   onUpdate: function (progress) {
  //     square.style.transform = 'translateY(' + 200 * progress + 'px)';
  //   }
  // });

  // const zigzag = new mojs.Shape({
  //   shape: 'zigzag',
  //   points: 7,
  //   radius: 25,
  //   radiusY: 50,
  //   top: pos.row1,
  //   left: pos.col1,
  //   fill: 'none',
  //   stroke: '#c159b0',
  //   isShowStart: true,
  // });


  // now it is avaliable to use on mo.js Shape constructor
  // const note_opts_one = {
  //   shape: 'oneNote',
  //   scale: { 7: 20 },
  //   y: { 20: -10 },
  //   duration: 2000,
  //   easing: 'sin.out'
  // };

  // const note1 = new mojs.ShapeSwirl({
  //   shape: 'oneNote',
  //   scale: { 7: 20 },
  //   y: { 20: -10 },
  //   duration: 2000,
  //   easing: 'sin.out',
  //   fill: { 'cyan': 'red' },
  //   swirlSize: 15,
  //   swirlFrequency: 20
  // }).then({
  //   opacity: 0,
  //   duration: 200,
  //   easing: 'sin.in'
  // });


  // Define Custom Shapes
  class Stones extends mojs.CustomShape {
    getShape(){ return '<path id="Stones" d="M31.3,53.9c1.1,1.5,0.6,3.6-1.1,4.3l-3.7,1.6c-4,1.7-8.6,1-11.9-1.8l-4.1-3.5c0,0,0-5.5,4.1-10 c4.1-4.5,14,5.9,14,5.9L31.3,53.9z M91,65.5c1.1-3.2,0.5-10.5-1.6-14.1c-2.7-4.5-10.8-7.3-15.2-10c-5.6-3.4-12-6.6-18.7-7.3 c-13.1-1.4-21.4,29.4-21.4,29.4c-0.6,2.2,3.2,5.8,10.3,8.1c7.2,2.3,31.2,5.3,35,3.9C82.8,74.3,89.9,68.7,91,65.5z M38.9,40	c0-1.1-4.1-2.8-6-2.8c-3.7,0-6,3.3-6,4.3c0,1.1,3.8,1.9,7.2,1.9C36.4,43.3,38.9,41,38.9,40z"/>'}
  }
  mojs.addShape('stones', Stones);


  class Rock extends mojs.CustomShape {
    getShape() { return '<path id="rock" d="M82.7,46.9l-5.3-2.4l-6.9-10.5l-14.2-2l-8.9,3.7L39,33.5l-13.8,2.1l-8.1,10v15.8l2.6,6.8l17.6,4.1l2.9,5.6h23.6	l25.7-14.1L82.7,46.9z M72.3,50.7l-8.2-0.6v-4.5l-4-10.1l9.9,3.2l4.7,4.3l3.8,5.8L72.3,50.7z"/>'; }
    getLength() { return 200; } // optional
  }
  mojs.addShape('rock', Rock);

  class Grass extends mojs.CustomShape {
    getShape() { return '<path id="grass" d="M51.9,78h5.4l3.9,0.3c0,0-5.6-44.5-11.2-55.7c6,24.7,6.6,42.6,6.3,50.8c-2.8-12.7-10.9-47.6-16.1-56.4	c6.8,21.6,10,41.1,11.2,52.1c-0.8-2.9-2-5.9-3.6-8c1.6,3.3,0.9,17.3,0.9,17.3L51.9,78z"/>' }
    getLength() { return 200; } // optional
  }
  mojs.addShape('grass', Grass)

  let pace = 1;
  let vanishingPoint = {x:-300, y: 20}

  const slopeSettings = {
    x: {300: vanishingPoint.x},
    y: {100: vanishingPoint.y},
    scale: {1:0.2},
    duration: 3000, // Calc duration based on pace and perspective parallax.
  }

  console.log(slopeSettings)

  const stones = new mojs.Shape({
    ...slopeSettings,
    shape: 'stones',
    fill: '#acacac',
    isShowStart: true,
  })

  const rock = new mojs.Shape({
    shape: 'rock',
    fill: {'#8d8d8d': '#8d8d8d'},
    x: {300: -300},
    y: {100: 20},
    scale: {1.2:0.7},
    duration: 3000,
    isShowStart: true,
  })

  const heart = new mojs.Shape({
    shape: 'grass',
    top: pos.row2,
    // left: pos.col1,
    // y: -60,
    fill: '#c159b0',
    isShowStart: true,
  })




  let mainTimeline = new mojs.Timeline({
    repeat: 10,
    isYoyo: false
  })

  mainTimeline
    .add(rock)
  // .play()


  // Put everything into the Player.
  new MojsPlayer({
    add: mainTimeline
  });
  console.log('Initialized app');
});