'use strict'
const koa = require('koa');
const route = require('koa-route');
const view = require('../view');
const path = require('path');
const app = koa();

module.exports = function (options, imports, register) {

    // Root route
    app.use(route.get('/', function* () {
        this.body = "Hello, World! - From the Koa server."
    }))

    app.use(route.get('/hello', imports.hello))

    // Route for /apps, lists all modules
    app.use(route.get('/apps', function* (){
        this.body = yield view('apps');
    }));


    console.log(`Server listening on port:8000`)
    app.listen(8000);
}