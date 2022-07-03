const Stundet = require("../models/Student.js");

module.exports = class ClassroomController {
  static async showAllStudents(req, res) {
    const students = await Stundet.findAll({ raw: true });
    res.render("home", { students });
  }
};
