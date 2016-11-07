'use strict'
module.exports = function(options, imports, register) {
    console.log('Loaded Hello Plug-in');
    console.log("Hello from the other side!");
    register(null,{})
}