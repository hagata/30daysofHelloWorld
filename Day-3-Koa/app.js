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
app.use(route.get('/posts/new', add));
app.use(route.get('/post/:id', show));
app.use(route.post('/post', create));

/**
 * Setup route generators
 */
function* list() {
    console.log('DATABASE:', db)
    this.body = yield view('list', {posts: db});
}

function* add() {
    this.body = yield view('new');
}

function* show(id) {
    console.log('show id', id);
    let post = db[id]
    if (!post) {
        this.throw(404, 'invalid post id');
    }
    this.body = yield view('post', {post: post})
}

function* create() {
    console.log('POST')
    let post = yield parse(this);

    console.log(post)
    let id = db.push(post) -1;
    post.created =  new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '');
    post.id = id;
    this.redirect('/');
}


//Setup views
const view = views(path.join(__dirname, './views'), {
    map:{
        html:'swig'
    }
});

app.listen(3000);
console.log(`Server running on port :3000`)