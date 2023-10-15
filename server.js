const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect("mongodb://localhost/student_register", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const studentsController = require("./controllers/studentsController");
const worksController = require("./controllers/worksController");
const authVerifyMiddleware = require("./middleware/authVerifyMiddleware");

app.get("/students", studentsController.getAllStudents);
app.get("/students/:id", studentsController.getStudentById);
app.post("/students", studentsController.createStudent);
app.put("/students/:id", studentsController.updateStudent);
app.delete("/students/:id", studentsController.deleteStudent);

app.use(authVerifyMiddleware);

app.get("/works", worksController.getAllWorks);
app.get("/works/:id", worksController.getWorkById);
app.post("/works", worksController.createWork);
app.put("/works/:id", worksController.updateWork);
app.delete("/works/:id", worksController.deleteWork);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
