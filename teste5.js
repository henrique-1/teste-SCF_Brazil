var data = require("./fakeData");

module.exports = function (req, res) {
  var { name } = req.query;

  let nRequests;
  for (let i = 0; i < data.length; i++) {
    if (data[i].name == name) {
      if (data[i].requests != undefined) {
        nRequests = data[i].requests;
      } else {
        data[i].requests = 0;
        nRequests = data[i].requests;
      }
      return res.status(200).send(`Usuário ${name} foi lido ${nRequests} vezes.`);
    }
  }

  return res.status(406).send("Usuário não encontrado");
};
