const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("classroom", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

try {
  sequelize.authenticate();
  console.log("Banco de dados conectado com sucesso");
} catch (err) {
  console.log(`Não foi possivel conectar ao banco de dados: ${err}`);
}

module.exports = sequelize;
