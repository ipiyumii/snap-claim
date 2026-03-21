const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Connect DB
connectDB();

// Middleware
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('API is running 🚀');
});

module.exports = app;