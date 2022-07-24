const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskSchema = new Schema({
  title: {
    type: String,
    required: "Title is required",
    minLength: [3, "Title needs at least 3 chars"],
  },
  author: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  description: {
    type: String,
    minLength: [10, "Description needs at least 3 chars"],
  },
  image: {
    type: String,
    default: "https://loremflickr.com/320/240/brazil",
    validate: {
      validator: function (image) {
        try {
          new URL(image);
          return true;
        } catch (error) {
          return false;
        }
      },
      message: (image) => `Invalid URL`,
    },
  },
  address: String,
  location: {
    type: {
      type: String, 
      enum: ['Point'],
    },
    coordinates: {
      type: [Number],
    }
  }
});

taskSchema.pre("validate", function (next) {
  this.image = this.image || undefined;
  this.description = this.description || undefined;
  next();
});

taskSchema.index({ location: '2dsphere' });

const Task = mongoose.model("Task", taskSchema);
module.exports = Task;
