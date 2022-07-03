const { DataTypes } = require("sequelize");
const db = require("../db/conn.js");

const Student = db.define("Student", {
  name: {
    type: DataTypes.STRING,
    require: true,
  },
  email: {
    type: DataTypes.STRING,
    require: true,
  },
});

module.exports = Student;
