const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskSchema = new Schema(
  {
    title: {
      type: String,
      required: 'Title is required',
      minLength: [3, 'Title needs at least 3 chars'] 
    },
    description: {
      type: String,
      required: false,
      minLength: [10, 'Description needs at least 3 chars']
    },
    image: {
      type: String,
      default: 'https://loremflickr.com/320/240/brazil',
      validate: {
        validator: function(image) {
          try {
            new URL(image);
            return true;
          } catch (error) {
            return false;
          }
        },
        message: image => `Invalid URL`
      },
    }
  }
)

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
