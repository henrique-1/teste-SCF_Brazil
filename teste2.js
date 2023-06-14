var data = require("./fakeData");

module.exports = function (req, res) {
  // Original
  //   var name = req.body.name;
  //   var jov = req.body.job;

  // Utilizo constante pois por se tratar de uma requisição (POST), não há necessidade de modificar o valor. Porém, quando há necessidade de modificar o valor enviado, o ideal é criar uma segunda variável
  const { name, job } = req.body;

  var newUser = {
    name: name,
    job: job,
  };

  data.push(newUser);

  // Retorno o HTTP Status Code 201 para alertar que o dado foi inserido
  res.status(201).json(newUser);
};
