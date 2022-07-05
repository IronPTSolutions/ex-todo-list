const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskSchema = new Schema(
  {
    title: {
      type: String,
      required: 'Title is required',
      minLength: [3, 'Title needs at least 3 chars'] 
    },
    description: String,
    author: String,
    image: String,
  }
)

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
