const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const todoRoutes = require("./routes/todoRoutes"); // Ensure correct path

dotenv.config();
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// ✅ Ensure this mounts correctly
app.use("/api/todos", todoRoutes); 

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
