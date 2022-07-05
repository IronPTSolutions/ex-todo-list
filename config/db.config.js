const Task = require('../models/task.model');
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/todolist")
  .then(() => console.info("connected DB"))
  .catch((error) => console.error("error DB", error));
