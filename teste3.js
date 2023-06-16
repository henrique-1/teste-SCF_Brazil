var data = require("./fakeData");

module.exports = function (req, res) {
  // ! A melhor forma de fazer a deleção de dados, é usando o ID para achar o usuário
  const { name } = req.query;
  console.log(name);
  for (let i = 0; i < data.length; i++) {
    if (data[i].name == name) {
      data.splice(i, 1);
      return res.status(200).send(`Usuário ${name} foi deletado com sucesso`);
    }
  }

  return res.status(400).send("Usuário não encontrado");
};
