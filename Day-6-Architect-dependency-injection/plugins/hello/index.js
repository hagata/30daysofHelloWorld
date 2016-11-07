'use strict'

// const view = require('../../core/view');
const views = require('co-views');
const path = require('path');
const root = require('../../settings').ROOT;

const view = views(path.join(__dirname, './views'), {
    map: {
        html: 'swig'
    }
})

module.exports = function(options, imports, register) {
    console.log('Loaded Hello Plug-in');
    console.log('registering hello route from hello');

    register(null,{
        hello: function* (){
            this.body = yield view('hello')
        }
    })
}