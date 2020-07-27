const mongoose = require('mongoose');

const schema = mongoose.Schema({
    nome: { type: String, required: true },
    senha: { type: String, required: true }
});

mongoose.model('Usuario', schema);