// ===================================================
// IMPORTANT: only for testing
// total.js - web application framework for node.js
// http://www.totaljs.com
// ===================================================

var fs = require('fs');
var options = {};

// options.tests = ['controllers', 'modules'];
// options.ip = '127.0.0.1';
// options.port = parseInt(process.argv[2]);
// options.config = { name: 'total.js' };
// options.https = { key: fs.readFileSync('keys/agent2-key.pem'), cert: fs.readFileSync('keys/agent2-cert.pem')};
// options.sleep = 2000;

/**
 * Release notes:
 */

require('total.js').http('test', options);
// require('total.js').https('test', options);