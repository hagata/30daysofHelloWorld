
const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;

const engine = Engine.create();

const render = Render.create({
    element: document.body,
    engine: engine
})

let activeUser = false;

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


// create Base World
let ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true });
let platform = Bodies.rectangle(420, 480, 200, 10, {isStatic: true});
const sceneBodies = [
    ground,
    platform,
];

class Player {
    constructor() {
        this.id = ''; //TODO: Add user id
        this.player = Bodies.circle(400, 200, 25, {friction: 0.5})
        this.controlHandler = this.controlHandler.bind(this);

        // let currentPlayer = this.player;
        this.init();
    }

    controlHandler(e){
        let key = e.keyCode;
        console.log('this is?', this.player)
        switch (key) {
            case 37:
                console.log('left')
                this.player.position.x -= 1;
                this.player.force.x -= .025;
                break;
            case 40:
                console.log('down');
                break
            case 38:
                console.log('up');
                this.player.position.y += 4;
                break;
            case 39:
                console.log('right');
                this.player.force.x += .025;
                this.player.position.x += 1;
                break;
            default:
                break;
        }
    }

    bindEvents(){
        document.addEventListener('keydown', this.controlHandler);
    }

    addPlayerToWorld(){
        World.add(engine.world, this.player)
    }

    init() {
        this.addPlayerToWorld();
        this.bindEvents()
    }
}


function loadObstacles() {
    let len = 100;
    for (let i = 0; i < len; i++) {
        let size = getRandomIntInclusive(10, 60)
        let posX = getRandomIntInclusive(0, 800)
        let posY = getRandomIntInclusive(-1820, 0)
        let bod = Bodies.rectangle(posX, posY, size, size, {density:0.0005})

        setTimeout(() => {
            World.remove(engine.world, bod);
            console.log('trying to remove', bod)
        }, getRandomIntInclusive(3000, 10000))
        sceneBodies.push(bod);
    }
}

function startGame() {
    loadObstacles();
    World.add(engine.world, sceneBodies)
    Engine.run(engine);
    Render.run(render);
    console.log('running');
}

function handleKeyInput(e){
    let key = e.keyCode;

    switch (key) {
        case 13:
            if (activeUser == true){
                break;
            }
            console.log('start');
            new Player();
            startGame();
            activeUser = true;
            break;
        default:
            break;
    }
}

document.addEventListener('keyup', handleKeyInput);