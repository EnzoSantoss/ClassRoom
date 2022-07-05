const express = require("express");
const exphbs = require("express-handlebars");
const app = express();
const conn = require("./db/conn.js");
const classroomRoutes = require("./routes/classroomRoutes.js");
const StudentController = require("./controllers/classroomController.js");

//TemplateEngine
app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

//Models
const Student = require("./models/Student.js");

//reading body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//public
app.use(express.static("public"));

//Routes
app.use("/students", classroomRoutes);
app.get("/", StudentController.showAllStudents);

conn
  // .sync({ force: true })
  .sync()
  .then(() => {
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });
