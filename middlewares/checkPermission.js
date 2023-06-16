var data = require("../fakeData");

const checkDelete = (req, res, next) => {
  const { name } = req.query;

  for (let i = 0; i < data.length; i++) {
    if (data[i].name == name) {
      if (data[i].canDelete == undefined) {
        data[i].canDelete = false;
      }
      if (data[i].canDelete) {
        return next();
      }
    }
  }

  return res.status(400).send("Permissões insuficientes");
};

const checkUpdate = (req, res, next) => {
  const { id } = req.query;

  for (let i = 0; i < data.length; i++) {
    if (data[i].id == id) {
      if (data[i].canUpdate == undefined) {
        data[i].canUpdate = false;
      }
      if (data[i].canUpdate) {
        console.log(req.body);
        return next();
      }
    }
  }

  return res.status(400).send("Permissões insuficientes");
};

module.exports = {
  checkDelete,
  checkUpdate,
};
