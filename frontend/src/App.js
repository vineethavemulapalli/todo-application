import React, { useState, useEffect } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { getTodos, addTodo, deleteTodo, toggleTodo } from "./api/todoApi";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    const data = await getTodos();
    setTodos(data);
  };

  const addNewTodo = async (title) => {
    const newTodo = await addTodo(title);
    if (newTodo) setTodos([...todos, newTodo]);
  };

  const handleDeleteTodo = async (id) => {
    await deleteTodo(id);
    setTodos(todos.filter(todo => todo._id !== id));
  };

  const handleToggleTodo = async (id, completed) => {
    const updatedTodo = await toggleTodo(id, completed);
    if (updatedTodo) {
      setTodos(todos.map(todo => (todo._id === id ? updatedTodo : todo)));
    }
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <TodoForm addNewTodo={addNewTodo} />
      <TodoList todos={todos} toggleTodo={handleToggleTodo} deleteTodo={handleDeleteTodo} />
    </div>
  );
}

export default App;
