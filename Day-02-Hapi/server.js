'use strict';

const Hapi = require('hapi');
const Inert = require('inert');
const Vision = require('vision');
const Handlebars = require('handlebars');

let history = [];

const server = new Hapi.Server();
server.connection({
    port: 3000
});

//Register Plugins
server.register(Inert, () => {});
server.register(Vision, err => {});

//Setup views
server.views({
    engines: {
        html: Handlebars
    },
    relativeTo: __dirname,
    path: 'templates'
})

server.route([{
    path: '/',
    method: 'GET',
    handler: function(request, reply) {
        reply.view('index', {msg: "Hello, Hapi World"})
    }
},
{
    path: '/',
    method: 'POST',
    handler: commandHandler
},
{
    path: '/static/{path*}',
    method: 'GET',
    handler: {
        directory: {
            path: './public',
            listing: false
        }
    }
}])

function commandHandler(request, reply) {
    let data = request.payload;
    let time = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '')

    let message =  {
        command: data.command,
        time: time,
        user: data.user
    }

    history.push(message)
    reply.view('index', {messages: history})
}

server.start(err => {
    if (err) {
        throw err;
    }

    console.log(`Server running at: ${server.info.uri}`);
})

