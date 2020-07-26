const mongoose = require('mongoose');

var schema = mongoose.Schema({
    "nome": {type: String, required: true},
    "experiencia": {type: String, required: true}
});

mongoose.model('Trainer', schema);