const mongoose = require('mongoose');
const Task = require("../models/task.model");

module.exports.list = (req, res, next) => {
  Task.find(req.query)
    .then((tasks) => res.render("tasks/list", { tasks }))
    .catch((error) => next(error))
};

module.exports.detail = (req, res, next) => {
  Task.findById(req.params.id)
    .then((task) => res.render("tasks/detail", { task }))
    .catch((error) => next(error))
};

module.exports.new = (req, res, next) => {
  res.render("tasks/new");
};

module.exports.create = (req, res, next) => {
  const data = req.body;

  Task.create(data)
    .then((task) => res.redirect("/tasks"))
    .catch((error) => {
      if (error instanceof mongoose.Error.ValidationError) {
        res.render("tasks/new");
      } else {
        next(error);
      }
    })
};

module.exports.delete = (req, res, next) => {
  Task.findByIdAndDelete(req.params.id)
    .then(() => res.redirect("/tasks"))
    .catch((error) => next(error))
};
