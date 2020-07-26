const http = require('http');
const app = require('./config/express');
require('./config/database')('localhost/apitrainer');

http.createServer(app)
    .listen('3000', () => console.log('Started server'));