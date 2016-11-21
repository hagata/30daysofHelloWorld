// Phaser requires global objects. define here.
window.PIXI = require('phaser/build/custom/pixi')
window.p2 = require('phaser/build/custom/p2')
window.Phaser = require('phaser');

console.log('phaser', Phaser);


/**
 * Phaser.Game(height, width, renderer, domElementID, object)
 * Renderer is either, Phaser.Canvas, Phaser.WebGL, Phaser.AUTO
 */
const game = new Phaser.Game(800, 600, Phaser.AUTO, '', {
  preload,
  create,
  update
})

function preload() {

}

function create() {

}

function update() {

}


console.log('%cPhaser Loaded', 'font-size:14px; color: #2ece00');

