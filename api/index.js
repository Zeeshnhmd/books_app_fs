import express from 'express';
import postRoutes from './routes/posts.js';
import authRoutes from './routes/auth.js';
import userRoutes from './routes/users.js';

const app = express();

app.use(express.json());

app.use('/api/post', postRoutes);

app.use('/api/auth', authRoutes);

app.use('/api/user', userRoutes);

app.get('/', (req, res) => {
	res.json('Hello this is the backend');
});

app.listen(8800, () => {
	console.log('Connected to Backend');
});
