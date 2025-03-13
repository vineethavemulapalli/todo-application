import React from "react";

const TodoItem = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <li className="todo-item">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo._id, !todo.completed)}
      />
      <span className={todo.completed ? "completed" : ""}>{todo.title}</span>
      <button onClick={() => deleteTodo(todo._id)}>Delete</button>
    </li>
  );
};

export default TodoItem;
