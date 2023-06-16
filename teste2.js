var data = require("./fakeData");

module.exports = function (req, res) {
  // ! Original
  //   var name = req.body.name;
  //   var jov = req.body.job;

  // * Utilizo constante pois por se tratar de uma requisição (POST), não há necessidade de modificar o valor. Porém, quando há necessidade de modificar o valor enviado, o ideal é criar uma segunda variável
  const { name, job, canUpdate, canDelete } = req.body;

  if (name == undefined && job == undefined) {
    return res.status(400).send("Requisição incompleta");
  }

  let ids = [];

  for (let i = 0; i < data.length; i++) {
    ids.push(data[i].id);
  }

  var newUser = {
    // * Adiciono o atributo de ID ao usuário que será cadastrado
    id: Math.max.apply(null, ids) + 1,
    name: name,
    job: job,
    canUpdate: canUpdate != undefined ? canUpdate : false,
    canDelete: canDelete != undefined ? canDelete : false,
  };

  data.push(newUser);

  // * Retorno o HTTP Status Code 201 para alertar que o dado foi inserido
  return res.status(201).json(newUser);
};
