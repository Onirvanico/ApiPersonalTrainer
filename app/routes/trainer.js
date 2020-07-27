

module.exports = app => {
    api = app.api.trainer;

    app.route('/v1/trainers')
        .get(api.lista)
        .post(api.salvaTrainer);

    app.route('/v1/trainers/:id')
        .get(api.buscaPorId)
        .delete( api.removePorId)
        .put(api.alteraTrainer);
};
