import axios from "axios";

// ✅ Corrected API URL
const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000/api/todos";

// ✅ Fetch all todos
export const getTodos = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("❌ Error fetching todos:", error.response?.data || error.message);
    return [];
  }
};

// ✅ Add a new todo
export const addTodo = async (title) => {
  try {
    const response = await axios.post(API_URL, { title, completed: false });
    return response.data;
  } catch (error) {
    console.error("❌ Error adding todo:", error.response?.data || error.message);
  }
};

// ✅ Delete a todo
export const deleteTodo = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.error("❌ Error deleting todo:", error.response?.data || error.message);
  }
};

// ✅ Toggle todo completion
export const toggleTodo = async (id, completed) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, { completed });
    return response.data;
  } catch (error) {
    console.error("❌ Error updating todo:", error.response?.data || error.message);
  }
};
import axios from "axios";

// Corrected API URL
const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000/api/todos";

// Fetch all todos
export const getTodos = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching todos:", error.response?.data || error.message);
    throw error;
  }
};

// Add a new todo
export const addTodo = async (title) => {
  if (!title) {
    throw new Error("Title is required");
  }
  try {
    const response = await axios.post(API_URL, { title, completed: false });
    return response.data;
  } catch (error) {
    console.error("Error adding todo:", error.response?.data || error.message);
    throw error;
  }
};

// Delete a todo
export const deleteTodo = async (id) => {
  if (!id) {
    throw new Error("ID is required");
  }
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.error("Error deleting todo:", error.response?.data || error.message);
    throw error;
  }
};

// Toggle todo completion
export const toggleTodo = async (id, completed) => {
  if (!id) {
    throw new Error("ID is required");
  }
  try {
    const response = await axios.put(`${API_URL}/${id}`, { completed });
    return response.data;
  } catch (error) {
    console.error("Error updating todo:", error.response?.data || error.message);
    throw error;
  }
};