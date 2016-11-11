var express = require('express');
var app = express();
var path = require('path');

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/src/index.html'));
});

app.use(express.static('src'))

console.log('App listening on port: 8080')
app.listen(8080);
