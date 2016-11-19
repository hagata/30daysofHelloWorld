'use strict';

// Register global Socket
const socket = io();

class DisplayBoard {
  constructor(node) {
    this.node = node;
    this.outputNode = this.node.querySelector('.direction');

    this.init();
  }

  updateDirection(direction) {
    this.outputNode.innerHTML = direction;
  }

  socketListener() {
    socket.on('controller.pressed.main', direction => {
      console.log('caught controls');
      this.updateDirection(direction);
    });
  }

  init() {
    this.socketListener();
  }
}

// load modules on a page
class Controller {
  constructor(node) {
    this.node = node;

    this.controllerBtn = this.node.querySelector('.controller-button');

    this.init();
  }

  handleEvents() {
    const directionButtons = this.node.querySelectorAll('.direction-button');
    for (const btn of directionButtons) {
      btn.addEventListener('click', e => {
        const dir = e.target.dataset.direction;
        socket.emit('controller.pressed.main', dir);
      });
    }
  }

  init() {
    console.log('controller started');
    this.handleEvents();
  }
}

const modules = {
  Controller: Controller,
  DisplayBoard: DisplayBoard
};

const appModules = {};

function loadModules() {
  const moduleNodes = document.querySelectorAll('[data-component]');

  for (const node of moduleNodes) {
    const moduleName = node.dataset.component;
    appModules[moduleName] = new modules[moduleName](node);
  }
}

// Init app
(function app() {
  loadModules();
  console.log('%cApp Loaded',
    'font-style:bold; font-size: 16px; color: #00aa11');

  // global events
  socket.on('controller.pressed.main', e => {
    console.log('controller passed', e);
  });
})();
