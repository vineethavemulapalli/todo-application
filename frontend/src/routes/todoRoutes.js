const express = require("express");
const { getTodos, createTodo, updateTodo, deleteTodo } = require("../controllers/todoController");

const router = express.Router();

// ✅ Ensure these match the registered routes
router.get("/", getTodos);
router.post("/", createTodo);
router.put("/:id", updateTodo);
router.delete("/:id", deleteTodo);

module.exports = router;
