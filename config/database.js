const mongoose = require('mongoose');

module.exports = uri => {
    
    mongoose.connect('mongodb://' + uri);
    
    mongoose.connection.on('connected', () => console.log('Conectado ao mongoDB'));
    
    mongoose.connection.on('error', error => console.log('Erro na conexão com o mongoDB ' + error));
    
    mongoose.connection.on('disconnected', () => console.log('mongodb foi desconectado'));
    
    process.on('SIGINT', () => mongoose.connection.close(() => {
        console.log('Conexão com mongoDB encerrada pelo término do app')
        process.exit(0);
    }));
}