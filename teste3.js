var data = require("./fakeData");

module.exports = function (req, res) {
  const { name } = req.query;

  for (let i = 0; i < data.length; i++) {
    if (data[i].name == name) {
      data.splice(i, 1);
      break;
    }
  }

  return res.status(200).send(`Usuário ${name} foi deletado com sucesso`);
};
