const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/todolist")
  .then(() => {
    console.log("connected DB");
  })
  .catch((err) => {
    console.log("error DB");
  });
