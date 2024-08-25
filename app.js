const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const studentRouter = require("./routes/studentRoutes");

const app = express();

dotenv.config();

app.use(bodyParser.json());

app.use("/api/v1/students", studentRouter);

module.exports = app;
