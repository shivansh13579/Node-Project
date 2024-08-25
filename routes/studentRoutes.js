const express = require("express");
const studentController = require("../controllers/studentControllers");

const studentRouter = express.Router();

studentRouter.post("/", studentController.createStudent);
studentRouter.put("/:id", studentController.updateStudent);
studentRouter.get("/:id", studentController.getStudent);
studentRouter.get("/", studentController.getAllStudent);

module.exports = studentRouter;
