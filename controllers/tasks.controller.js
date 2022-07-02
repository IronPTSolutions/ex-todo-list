const Task = require("../models/task.model");

module.exports.list = (req, res, next) => {
  Task.find(req.query).then((tasks) => {
    res.render("tasks/list", { tasks });
  });
};

module.exports.detail = (req, res, next) => {
  Task.findById(req.params.id).then((task) => {
    res.render("tasks/detail", { task });
  });
};

module.exports.new = (req, res, next) => {
  res.render("tasks/new");
};

module.exports.create = (req, res, next) => {
  const data = req.body;

  Task.create(data).then((task) => {
    res.redirect("/tasks");
  });
};

module.exports.delete = (req, res, next) => {
  Task.findByIdAndDelete(req.params.id).then(() => {
    res.redirect("/tasks");
  });
};
