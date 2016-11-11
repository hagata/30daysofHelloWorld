'use strict'
const views = require('co-views');
const path = require('path');
const root = require('../../settings').ROOT;

module.exports = views(path.join(root, './views'), {
    map: {
        html: 'swig'
    }
})
