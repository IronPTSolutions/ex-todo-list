const express = require("express");
const router = express.Router();

const task = require('../controllers/tasks.controller')


    router.get('/tasks', task.list)
// TODO: GET /tasks -> render task list with filters
    router.get('/tasks/:id', task.detail)
// TODO: GET /tasks/:id -> render task detail
    router.get('/tasks/new', tasks.new)
// TODO: GET /tasks/new -> render task form
    router.post('tasks', task.create)
// TODO: POST /tasks -> create task and redirect to list
    router.post('tasks/:id/delete', task.delete)
// TODO: POST /tasks/:id/delete -> delete task and redirect to list
// Check tasks.controller.js exported functions!

module.exports = router;
