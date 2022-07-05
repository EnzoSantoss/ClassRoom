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

    console.log(student);

    res.render("student", { student });
  }
};
