var express = require('express');
var app = express();
var consign = require('consign');

consign({cwd: 'app'})
    .include('api')
    .then('routes')
    .into(app);

module.exports = app;

