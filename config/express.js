const express = require('express');
const app = express();
const consign = require('consign');
const bodyParser = require('body-parser');

app.set('secretkey', 'trespratosdetrigo');
app.use(bodyParser.json());

consign({cwd: 'app'})
    .include('models/trainer.js')
    .then('api/trainer.js')
    //.then('routes/auth.js')
    .then('routes/trainer.js')
    .into(app);

module.exports = app;

