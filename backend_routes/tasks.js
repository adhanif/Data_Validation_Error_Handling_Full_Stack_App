const express = require("express");
const tasksRouter = express.Router();
const { body, validationResult } = require("express-validator");
const {
  createTask,
  getTasks,
} = require("../controllers_backend/taskController");

tasksRouter.get("/tasks", getTasks);

// tasksRouter.post("/tasks/create", createTask);

tasksRouter.post(
  "/tasks/create",

  [
    body("title").notEmpty().isString(),
    body("description").notEmpty().isString(),
    body("priority").notEmpty().isString(),
    body("status").notEmpty().isString(),
  ],
  (req, res, next) => {
    const result = validationResult(req);
    if (result.isEmpty()) {
      return next();
    }
    res.status(400).json({ errors: result.array() });
  },
  createTask
);

module.exports = { tasksRouter };
