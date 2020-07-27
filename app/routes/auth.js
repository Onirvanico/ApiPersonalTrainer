module.exports = app => {
    api = app.api.auth;

    app.post('/autentica', api.autentica)
       .use('/*', api.verificaToken);
};