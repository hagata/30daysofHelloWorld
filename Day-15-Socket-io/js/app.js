// emmits 'connected'.
console.log('%cApp Loaded', 'font-style:bold; font-size: 16px; color: #00aa11');
const socket = io();

// Init app
// global events
socket.on('controller.pressed.main', e => {
  console.log('controller passed', e);
});

let messageForm = document.querySelector('.message-form') || null;
if (messageForm) {
  let messageInput = document.querySelector('.message-input');

  console.log('message', messageInput);

  messageForm.addEventListener('submit', e => {
    let msg = messageInput.value;
    e.preventDefault();

    // Emit the socket.io event with the message data
    socket.emit('chatMessage', msg);
    messageInput.value = '';
  });
}

// load modules on a page

let controller = document.querySelector('.controller') || null;
if (controller) {
  console.log('controller started');

  let controllerBtn = document.querySelector('.controller-button');
  controllerBtn.addEventListener('click', e => {
    e.preventDefault();
    console.log('controller button clicked');
    socket.emit('controller.pressed.main', e);
  });
}
