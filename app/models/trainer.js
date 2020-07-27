const mongoose = require('mongoose');

const schema = mongoose.Schema({
    "nome": {type: String, required: true},
    "experiencia": {type: String, required: true}
});

mongoose.model('Trainer', schema);