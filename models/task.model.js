const mongoose = require("mongoose");

const Task = mongoose.model("Task", {
  title: String,
  description: String,
  author: String,
  image: String,
});

module.exports = Task;
