import connectDB from './config/db.js';
import express from 'express';
import userRoutes from './routes/userRoutes.js';
import departmentRoutes from './routes/departmentRoutes.js';
import dotenv from 'dotenv';

dotenv.config();

connectDB();
const cors = require('cors');
app.use(cors());

const app = express();

app.use(express.json());

app.use('/api/departments', departmentRoutes);
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
