'use strict'

const Koa = require('koa');
const app = Koa();

app.use(function* (){
    this.body = "Hello, Koa!";
});

app.listen(3000);
console.log(`Server running on port :3000`)