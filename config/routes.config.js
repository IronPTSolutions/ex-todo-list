const express = require("express");
const router = express.Router();
const tasks = require("../controllers/tasks.controller");

router.get("/tasks", tasks.list);
router.get("/tasks/new", tasks.new);
router.get("/tasks/:id", tasks.detail);
router.post("/tasks", tasks.create);
router.post("/tasks/:id/delete", tasks.delete);

module.exports = router;
