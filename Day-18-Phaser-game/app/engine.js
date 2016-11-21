// Phaser requires global objects. define here.
window.PIXI = require('phaser/build/custom/pixi')
window.p2 = require('phaser/build/custom/p2')
window.Phaser = require('phaser');

console.log('phaser', Phaser);

// Gloabals for the game world
let platforms;
let hero;

/**
 * Phaser.Game(height, width, renderer, domElementID, object)
 * Renderer is either, Phaser.Canvas, Phaser.WebGL, Phaser.AUTO
 */
const game = new Phaser.Game(800, 460, Phaser.AUTO, '', {
  preload,
  create,
  update
})

function preload() {
  game.load.image('background', 'assets/background.png');
  game.load.image('ground', 'assets/platform.png');

  // Load Hero sprite sheet. (label, assetpath, height, width);
  game.load.spritesheet('hero', 'assets/dude.png', 32, 48);
}

function create() {
  // Create the physics
  game.physics.startSystem(Phaser.Physics.ARCADE);

  // add background
  game.add.sprite(0, 0, 'background');

  // add platforms
  platforms = game.add.group();

  //Add physics to the platforms
  platforms.enableBody = true;

  // Create ground plane
  let ground = platforms.create(0, game.world.height - 64, 'ground');

  // Set scale
  ground.scale.setTo(2, 2);
  ground.alpha = 0;

  // Make the ground stationary
  ground.body.immovable = true;

  // make some ledges
  let ledge = platforms.create(200, 190, 'ground');
  ledge.body.immovable = true;

  ledge = platforms.create(-150, 300, 'ground');
  ledge.body.immovable = true;

  // add hero
  hero = game.add.sprite(100, game.world.height - 200, 'hero');

  // add physics to hero
  game.physics.arcade.enable(hero);

  // Physics properties for the Hero.
  hero.body.bounce.y = 0.2;
  hero.body.gravity.y = 500;
  hero.body.collideWorldBounds = true;

  // walk animations
  hero.animations.add('left', [0, 1, 2, 3], 10, true);
  hero.animations.add('right', [5, 6, 7, 8], 10, true);

}

function update() {

  // collision check
  let hitPlatform = game.physics.arcade.collide(hero, platforms)
  // Controls
  let cursors = game.input.keyboard.createCursorKeys();

  // reset player velocity
  hero.body.velocity.x = 0;
  if (cursors.left.isDown) {
    hero.body.velocity.x = -150;
    hero.animations.play('left');
  }
  else if (cursors.right.isDown) {
    hero.body.velocity.x = 150;
    hero.animations.play('right');
  } else {
    // if the hero isn't moving, show standing frame
    hero.animations.stop();
    hero.frame = 4;
  }

  //if the player is on the ground, allow jump
  if (cursors.up.isDown && hero.body.touching.down && hitPlatform) {
    hero.body.velocity.y = -350;
  }
}


console.log('%cPhaser Loaded', 'font-size:14px; color: #2ece00');

