const StudentController = require("../controllers/classroomController.js");
const express = require("express");
const router = express.Router();

router.get("/", StudentController.showAllStudents);
router.get("/registerStudent", StudentController.registerStudent);
router.post("/registerStudent", StudentController.registerStudentPost);
router.get("/student/:id", StudentController.singleStundent);

module.exports = router;
