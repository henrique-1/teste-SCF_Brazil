var data = require("./fakeData");

module.exports = function (req, res) {
  var { name } = req.query;

  for (let i = 0; i < data.length; i++) {
    if (i.name == name) {
      data[i] = null;
    }
  }

  res.status(200).send(`Usuário ${name} foi deletado com sucesso`);
};
