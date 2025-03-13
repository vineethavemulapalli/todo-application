const Todo = require("../models/todoModel");

// ✅ Get all todos
exports.getTodos = async (req, res) => {
    try {
        const todos = await Todo.find();
        res.json(todos);
    } catch (error) {
        res.status(500).json({ message: "Error fetching todos", error });
    }
};

// ✅ Create a new todo
exports.createTodo = async (req, res) => {
    try {
        const { title } = req.body;
        const newTodo = new Todo({ title, completed: false });
        await newTodo.save();
        res.status(201).json(newTodo);
    } catch (error) {
        res.status(500).json({ message: "Error creating todo", error });
    }
};

// ✅ Update a todo
exports.updateTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedTodo = await Todo.findByIdAndUpdate(id, req.body, { new: true });
        res.json(updatedTodo);
    } catch (error) {
        res.status(500).json({ message: "Error updating todo", error });
    }
};

// ✅ Delete a todo
exports.deleteTodo = async (req, res) => {
    try {
        const { id } = req.params;
        await Todo.findByIdAndDelete(id);
        res.json({ message: "Todo deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting todo", error });
    }
};
