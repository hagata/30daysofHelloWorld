'use-strict';

const Hapi = require('hapi');

const server = new Hapi.Server();
server.connection({
    port: 3000
});

server.route({
    path: '/',
    method: 'GET',
    handler: function(request, reply) {
        reply('Hello, Hapi World!')
    }
})


server.start(err => {
    if (err) {
        throw err;
    }

    console.log(`Server running at: ${server.info.uri}`);
})

