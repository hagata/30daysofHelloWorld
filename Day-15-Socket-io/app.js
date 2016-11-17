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

const Handlers = {
    root: function*(){
        this.body = yield view('index')
    }
}

app.use(route.get('/', Handlers.root));
app.use(staticRoute('./'));
io.on('connection', () => {
console.log('io connection')
})

io.on('connection', function(socket){
  console.log('a user connected');
});

server.listen(3000);
console.log('listening on port:3000')