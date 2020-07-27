module.exports = app => {

    const mongoose = require('mongoose');
    const usuarios = mongoose.model('Usuario');
    const jwt = require('jsonwebtoken');

    api = {};

    api.autentica = (req, res) => {
        console.log('Tentando autenticar...')
        let usuario = req.body;
        usuarios.findOne({login: usuario.login, senha: usuario.senha})
            .then(usuario => {
                    if(!usuario) {
                        console.log('Usuário e senha inválido');
                        res.sendStatus(401);
                    } else {
                        var token = jwt.sign({login: usuario.login},
                            app.get('secretkey'), {expiresIn: 42300});
                    }
                    console.log('Token criado e sendo enviado no header de resposta');
                    res.set('x-access-token', token);
                    res.end();

            }, error => {
                console.log('Usuário e senha inválido');
                res.status(401).json(error);
            });
    };

    api.verificaToken = (req, res, next) => {
        console.log('Verificando token...');
        let token = req.headers['x-access-token'];
        if(!token) {
            console.log('Token não enviado');
            res.sendStatus(401);
        } else {
            console.log('Analisando token...');
            jwt.verify(token, app.get('secretkey'), (error, decoded) => {
                if(error) {
                    console.log('Erro ao verificar o token');
                    res.sendStatus(401);  
                } 
                req.usuario = decoded;
                next();
                console.log('Token verificado com sucesso');
            });
        }
        
    };
    
    return api;

};