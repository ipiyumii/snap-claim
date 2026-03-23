import route from "./routes/claimsRoute.js";
import express from 'express';
import connectDB from './config/db.js';

const app = express();

// Connect DB
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api/claims', route);

export default app;