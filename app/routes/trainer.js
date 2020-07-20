

module.exports = app => {
    api = app.api.trainer;

    app.get('/v1/trainers', api.lista);
    app.route('/v1/trainers/:id')
    .get(api.buscaPorId)
    .delete( api.removePorId);
};
