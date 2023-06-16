var data = require("./fakeData");

module.exports = function (req, res) {
  const { id } = req.query;
  const { name, job, canUpdate, canDelete } = req.body;

  if (name == undefined && job == undefined && id == undefined) {
    return res.status(406).send("Requisição incompleta");
  }

  for (let i = 0; i < data.length; i++) {
    if (data[i].id == id) {
      data[i].name = name;
      data[i].job = job;
      data[i].canUpdate = canUpdate != undefined ? canUpdate : false;
      data[i].canDelete = canDelete != undefined ? canDelete : false;
      reg = data[i];
      return res.status(200).send(reg);
    }
  }

  // ! Código antigo
  // const reg = data.find((user) => user.id == id);
  // console.log(reg);
  // reg.name = req.body.name;
  // reg.job = req.body.job;
  return res.status(400).send("Usuário não encontrado");
};
