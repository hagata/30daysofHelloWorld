const app = require('koa')();
const server = require('http').createServer(app.callback());
const io = require('socket.io')(server);
const route = require('koa-route');
const staticRoute = require('koa-static');
const views = require('co-views');

// Setup views with swig templates
const view = views('./views', {
  map: {
    html: 'swig'
  }
});

// Setup Koa app/server handlers
const Handlers = {
  root: function * () {
    this.body = yield view('index');
  },
  controls: function * () {
    this.body = yield view('controls');
  }
};

// Koa Route setup
app.use(route.get('/', Handlers.root));
app.use(route.get('/controls', Handlers.controls));
app.use(staticRoute('./'));

// Socket IO
io.on('connection', socket => {
  console.log('io connection connected?', socket.connected);
  console.log('a user connected');

  // Socket.io Subscriptions
  socket.on('chatMessage', data => {
    console.log(`message: ${data}`);
  });

  socket.on('controller.pressed.main', data => {
    io.emit('controller.pressed.main', data);
  });
});


// Start the server.
server.listen(3000);
console.log('listening on port:3000');
