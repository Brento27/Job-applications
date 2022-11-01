import connectDB from './config/db.cjs';
import express from 'express';
import userRoutes from './routes/userRoutes.cjs';
import departmentRoutes from './routes/departmentRoutes.cjs';
import dotenv from 'dotenv';

dotenv.config();

connectDB();

const app = express();
const cors = require('cors');
app.use(cors());

app.use(express.json());

app.use('/api/departments', departmentRoutes);
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);