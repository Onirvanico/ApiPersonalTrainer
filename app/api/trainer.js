const mongoose = require('mongoose');
const api = {};

/*  var trainers = [{nome: 'Joao', experiencia: '100', reputacao: 2},
 {nome: 'Pedro', experiencia: '20', reputacao: 1},
 {nome: 'Lara', experiencia: '120', reputacao: 3},
 {nome: 'Ana', experiencia: '130', reputacao: 3},
 {nome: 'Marcos', experiencia: '280', reputacao: 5},
 {nome: 'Ery', experiencia: '330', reputacao: 5},
 {nome: 'Jenny', experiencia: '174', reputacao: 4},
 {nome: 'Kimberly', experiencia: '200', reputacao: 3}]; */

 const trainers = mongoose.model('Trainer');

api.lista = (req, res) => {
    console.log('Tentando enviar lista de professores'); 
    //   res.json(trainers);
    trainers.find({})
        .then(trainers => res.json(trainers),
              error => {
                console.log(error);
                res.status(500).json(error);
              });

};

api.buscaPorId = (req, res) => {
    console.log('Tentando enviar com o id informado');
    let id = req.params.id;
   /*  var trainer = trainers.find(trainer => trainer.reputacao == id);
    res.json(trainer); */
    trainers.findById(id)
        .then(trainer => {
            if(!trainer) throw new Error('Trainer não encontrado com id informado')

            res.json(trainer);

        }, error => {
            console.log(error);
            res.status(404).json(error)
        });
};

api.removePorId = (req, res) => {
    console.log("Tentando remover com o id informado");
    var id = req.params.id;
    /* trainers = trainers.filter(trainer => trainer.reputacao != id);
    res.sendStatus(204); */
    trainers.remove({_id: id})
        .then(() => res.sendStatus(204), 
                error => res.sendStatus(500).json(error));
};

api.alteraTrainer = (req, res) => {
    var id = req.params.id;
    var trainer = req.body;
    var indiceTrainer = trainers.findIndex(trainer => trainer.reputacao == id);
    console.log('trainer recebido ' + trainer.nome);
    trainers[indiceTrainer] = trainer;
    res.sendStatus(200);
    console.log("Professor alterado com sucesso" + '\n indice: ' + indiceTrainer );
};

api.salvaTrainer = (req, res) => {
    console.log('Tentando salvar Trainer');
    let trainer = req.body;
  /*   trainers.push(trainer);
    res.sendStatus(201);
    console.log('Trainer salvo com sucesso'); */
    trainers.create(trainer)
        .then(trainer => {
            res.json(trainer)
            console.log('Depois de salvo ' + trainer);
        },
              error => {
                console.log(error);
                res.status(500).json(error);
              });
};


module.exports = api;