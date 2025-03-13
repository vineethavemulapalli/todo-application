import React, { useState } from "react";

const TodoForm = ({ addNewTodo }) => {
  const [newTodo, setNewTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newTodo.trim()) return;
    addNewTodo(newTodo);
    setNewTodo("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Enter a new todo"
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default TodoForm;
