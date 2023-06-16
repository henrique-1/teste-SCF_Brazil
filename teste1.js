var data = require("./fakeData");

const getUser = (req, res, next) => {
  const { name } = req.query;

  for (let i = 0; i < data.length; i++) {
    if (data[i].name == name) {
      // * Adiciono um novo atributo ao objeto para guardar quantas requisições o usuário sofreu
      if (data[i].requests != undefined) {
        data[i].requests = data[i].requests + 1;
      } else {
        data[i].requests = 1;
      }

      // * Adicionar um return no IF dentro de um loop, ajuda a melhorar o tempo de execução da aplicação no melhor caso
      // Entende-se por melhor caso quando o nome procurado está na primeira posição
      // * Sendo assim, no melhor caso, o código irá parar de ser executado assim que encontrar o dado
      return res.status(200).send(data[i]);
    }
  }

  return res.status(400).send("Usuário não encontrado");
};

const getUsers = (req, res, next) => {
  // * Faço um loop para adicionar a todos os usuários o atributo requests
  for (let i = 0; i < data.length; i++) {
    if (data[i].requests != undefined) {
      data[i].requests = data[i].requests + 1;
    } else {
      data[i].requests = 1;
    }
  }
  return res.status(200).send(data);
};

module.exports = {
  getUser,
  getUsers,
};
