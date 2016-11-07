'use strict'
const koa = require('koa');
const route = require('koa-route');
const app = koa();

module.exports = function(options, imports, register){

    app.use(route.get('/', function* (){
        this.body = "Hello, World! - From the Koa server."
    }))

    console.log(`Server listening on port:8000`)
    app.listen(8000);
}