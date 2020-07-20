var http = require('http');
var app = require('./config/express');


http.createServer(app)
    .listen('3000', () => console.log('Started server'));