exports.getTodos = (req, res) => {
    res.send("Get all todos");
};

exports.createTodo = (req, res) => {
    res.send("Create a new todo");
};

exports.updateTodo = (req, res) => {
    res.send("Update a todo");
};

exports.deleteTodo = (req, res) => {
    res.send("Delete a todo");
};
