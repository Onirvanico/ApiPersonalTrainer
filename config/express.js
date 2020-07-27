const express = require('express');
const app = express();
const consign = require('consign');
const bodyParser = require('body-parser');

app.set('secretkey', 'trespratosdetrigo');
app.use(bodyParser.json());

consign({cwd: 'app'})
    .include('models')
    .then('api')
    .then('routes/auth.js')
    .then('routes')
    .into(app);

module.exports = app;

