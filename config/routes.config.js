const express = require("express");
const router = express.Router();

const misc = require('../controllers/misc.controller');
const tasks = require('../controllers/tasks.controller')

router.get('/', misc.home);

router.get('/tasks', tasks.list);

router.get('/tasks/new', tasks.new)
router.get('/tasks/:id', tasks.detail)
router.post('/tasks', tasks.create)

// TODO: GET /tasks -> render task list with filters
// TODO: GET /tasks/:id -> render task detail
// TODO: GET /tasks/new -> render task form
// TODO: POST /tasks -> create task and redirect to list
// TODO: POST /tasks/:id/delete -> delete task and redirect to list
// Check tasks.controller.js exported functions!

module.exports = router;
