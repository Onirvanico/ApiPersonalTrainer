
var api = {};

 var trainers = [{nome: 'Joao', experiencia: '100', reputacao: 2},
 {nome: 'Pedro', experiencia: '20', reputacao: 1},
 {nome: 'Lara', experiencia: '120', reputacao: 3},
 {nome: 'Ana', experiencia: '130', reputacao: 3},
 {nome: 'Marcos', experiencia: '280', reputacao: 5},
 {nome: 'Ery', experiencia: '330', reputacao: 5},
 {nome: 'Jenny', experiencia: '174', reputacao: 4},
 {nome: 'Kimberly', experiencia: '200', reputacao: 3}];

api.lista = (req, res) => {
    res.json(trainers);
    console.log('Enviando lista de professores');
};

api.buscaPorId = (req, res) => {
    var id = req.params.id;
    var trainer = trainers.find(trainer => trainer.reputacao == id);
    res.json(trainer);
    console.log('Professor enviado com o id informado');
};

api.removePorId = (req, res) => {
    var id = req.params.id;
    trainers = trainers.filter(trainer => trainer.reputacao != id);
    res.sendStatus(204);
    console.log("Professor removido com o id informado");
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
    var trainer = req.body;
    trainers.push(trainer);
    res.sendStatus(201);
    console.log('Trainer salvo com sucesso');
};


module.exports = api;