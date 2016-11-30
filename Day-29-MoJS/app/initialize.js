'use strict';

import mojs from 'mo-js';
import MojsPlayer from 'mojs-player';

import getRandomInt from './scripts/utils/random';

document.addEventListener('DOMContentLoaded', () => {
  const tweens = {}


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

  let pace = 2;
  let vanishingPoint = {x:-800, y: -40}

  // Set common properties.
  const slopeSettings = {
    x: {300: vanishingPoint.x},
    y: {180: vanishingPoint.y},
    opacity: {1: 0.8}, // disappear into the distant fog.
    scale: {1.5:0.35},
    duration: 5000 * pace, // Calc duration based on pace and perspective parallax.
  }

  const rearSlopeSettings = {
    ...slopeSettings,
    x: {800: vanishingPoint.x + 200},
    duration: 5000 * (pace * 1.5),
    zIndex: -1,
  }


  // Make lots of shapes. Get the CPU fans to spin!
  const frontGrassGroup = createRandomObjectArray('grass', 10, {
    ...slopeSettings,
    fill: '#7cb342'
  });

  const frontRockGroup = createRandomObjectArray('rock', 12, {
    ...slopeSettings,
    fill: {'#8d8d8d': '#8d8d8d'},
  })

  const frontStonesGroup = createRandomObjectArray('stones', 8, {
      ...slopeSettings,
      shape: 'stones',
      fill: '#acacac',
  })

  const rearGrassGroup = createRandomObjectArray('grass', 20, {
    ...rearSlopeSettings,
    fill: '#8ba274'
  });

  console.log(rearGrassGroup);

  let frontTimeline = new mojs.Timeline()
    .add(...frontRockGroup, ...frontStonesGroup, ...frontGrassGroup);

  let rearTimeline = new mojs.Timeline()
    .add(...rearGrassGroup);

  let mainTimeline = new mojs.Timeline()
    .add(frontTimeline, rearTimeline)


  // Put everything into the Player.
  new MojsPlayer({
    add: mainTimeline
  });
  console.log('Initialized app');
});

/**
* Creates an Array of a single type of shape.
*
* @param {String} moShape the name of the shape that will be created.
* @param {Int} num The number of shapes you want added to the array
* @param {Object} shapeSettings An object of shape settings to be applied to each new shape.
*
* @returns {Array}
*/
function createRandomObjectArray(moShape, num, shapeSettings) {
    const shapeArray = [];

    for (var i = 0; i <= num; i++) {
    let randomNumber = getRandomInt(i, 100);
    let shape = new mojs.Shape({
      ...shapeSettings,
      shape: moShape,
      delay: 140 * randomNumber,
    })

    shapeArray.push(shape)
  }

  return shapeArray;
}