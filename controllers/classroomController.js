const Stundet = require("../models/Student.js");

module.exports = class ClassroomController {
  static async showAllStudents(req, res) {
    const students = await Stundet.findAll({ raw: true });
    res.render("home", { students });
  }

  static registerStudent(req, res) {
    res.render("form");
  }

  static async registerStudentPost(req, res) {
    const student = {
      name: req.body.name,
      email: req.body.email,
    };

    await Stundet.create(student);

    res.redirect("/");
  }

  static async singleStundent(req, res) {
    const stundetID = req.params.id;

    const student = await Stundet.findOne({
      raw: true,
      where: { id: stundetID },
    });

    res.render("student", { student });
  }

  static async editStudent(req, res) {
    const id = req.params.id;

    const student = await Stundet.findOne({ where: { id: id }, raw: true });
    res.render("formEdit", { student });
  }

  static async editStudentPost(req, res) {
    const id = req.body.id;

    const student = {
      name: req.body.name,
      email: req.body.email,
    };

    await Stundet.update(student, { where: { id: id } });

    res.redirect("/");
  }

  static async deleteStudent(req, res) {
    const id = req.body.id;

    await Stundet.destroy({ where: { id: id } });

    res.redirect("/");
  }
};
