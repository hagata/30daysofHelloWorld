'use strict'

const Koa = require('koa');
const route = require('koa-route');
const parse = require('co-body');
// const render = require('./lib/render');
const views = require('co-views');
const path = require('path');

const app = module.exports = Koa();

//Temp Database
let db = [];

/**
 * Setup middleware
 */
app.use(route.get('/', list));



/**
 * Setup route generators
 */
function* list() {
    this.body = yield view('list', {posts: db})
}


//Setup views
const view = views(path.join(__dirname, './views'), {
    map:{
        html:'swig'
    }
});

app.listen(3000);
console.log(`Server running on port :3000`)