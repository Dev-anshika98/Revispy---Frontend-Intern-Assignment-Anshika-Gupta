import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.js';
import categoryRoutes from './routes/categories.js';
import { seedCategories } from './utils/seedCategories.js';
import connectdb from './db/db.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: 'http://localhost:5173', // replace with your actual frontend link
  credentials: true // if using cookies or authorization headers
}));
app.use(express.json());

// MongoDB connection
// mongoose.connect(`${process.env.MONGO_URI}`)
//   .then(() => {
//     console.log('Connected to MongoDB');
//     seedCategories(); // Seed categories on startup
//   })
//   .catch((error) => console.error('MongoDB connection error:', error));

// Routes

connectdb();
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from backend!' });
});
app.use('/api/auth', authRoutes);
app.use('/api/categories', categoryRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});