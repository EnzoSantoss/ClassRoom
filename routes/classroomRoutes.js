const StudentController = require("../controllers/classroomController.js");
const express = require("express");
const router = express.Router();

router.get("/", StudentController.showAllStudents);
router.get("/registerStudent", StudentController.registerStudent);
router.post("/registerStudent", StudentController.registerStudentPost);
router.get("/student/:id", StudentController.singleStundent);
router.get("/studentEdit/:id", StudentController.editStudent);
router.post("/studentEdit", StudentController.editStudentPost);
router.post("/delete", StudentController.deleteStudent);

module.exports = router;
