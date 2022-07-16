const express = require("express");
const router = express.Router();
const { tasks, auth, users } = require("../controllers");
const secure = require("../middlewares/secure.mid");

router.get("/tasks", secure.isAuthenticated, tasks.list);
router.get("/tasks/new", secure.isAuthenticated, tasks.new);
router.get("/tasks/:id", secure.isAuthenticated, tasks.detail);
router.post("/tasks", secure.isAuthenticated, tasks.create);
router.post("/tasks/:id/delete", secure.isAuthenticated, tasks.delete);

router.get("/register", auth.register);
router.post("/register", auth.doRegister);

router.get("/login", auth.login);
router.post("/login", auth.doLogin);

router.get("/users/:id", secure.isAuthenticated, users.detail);
router.get("/users/:id/confirm", users.confirm);

module.exports = router;
