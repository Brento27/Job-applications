import connectDB from './config/db';

connectDB();

const app = express();

app.use(express.json());

app.use('/api/departments', departmentRoutes);
app.use('/api/users', userRoutes);
