const mongoose = require("mongoose");
const { Task } = require("../models");

module.exports.list = (req, res, next) => {
  Task.find()
    .populate("author")
    .then((tasks) => {
      res.render("tasks/list", { tasks });
    })
    .catch((error) => next(error));
};

module.exports.detail = (req, res, next) => {
  if (!req.user.admin) {
    return res.redirect("/tasks");
  }

  Task.findById(req.params.id)
    .then((task) => res.render("tasks/detail", { task }))
    .catch((error) => next(error));
};

module.exports.new = (req, res, next) => {
  res.render("tasks/new");
};

module.exports.create = (req, res, next) => {
  const task = {
    ...req.body,
    author: req.user.id,
  };

  Task.create(task)
    .then((task) => res.redirect("/tasks"))
    .catch((error) => {
      if (error instanceof mongoose.Error.ValidationError) {
        console.error(error);
        res.render("tasks/new", { errors: error.errors, task });
      } else {
        next(error);
      }
    });
};

module.exports.delete = (req, res, next) => {
  Task.findByIdAndDelete(req.params.id)
    .then(() => res.redirect("/tasks"))
    .catch((error) => next(error));
};
