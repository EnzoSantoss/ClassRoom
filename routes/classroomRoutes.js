const StudentController = require("../controllers/classroomController.js");
const express = require("express");
const router = express.Router();

router.get("/", StudentController.showAllStudents);

module.exports = router;
