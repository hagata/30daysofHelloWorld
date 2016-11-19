const app = require('koa')();
const server = require('http').createServer(app.callback());
const io = require('socket.io')(server);
const route = require('koa-route');
const staticRoute = require('koa-static');
const views = require('co-views');

//Setup views
const view = views('./views', {
    map:{
        html:'swig'
    }
});

// Setup app handlers
const Handlers = {
    root: function*(){
        this.body = yield view('index')
    }
}

// Route setup
app.use(route.get('/', Handlers.root));
app.use(staticRoute('./'));

// Socket IO
io.on('connection', (socket) => {
    console.log('io connection connected?', socket.connected);
    console.log('a user connected');
})

// Start the server.
server.listen(3000);
console.log('listening on port:3000')