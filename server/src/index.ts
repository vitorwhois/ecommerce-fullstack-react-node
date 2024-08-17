import express, { Application } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import usersRoutes from './routes/usersRoutes';
import productsRoutes from './routes/productsRoutes';
import corsConfig from './config/corsConfig';
import { connectDB } from './config/dbConfig';

dotenv.config();

const app: Application = express();

// Middleware para analisar JSON
app.use(express.json());

app.use(corsConfig);

connectDB();

app.get('/api/health', (req, res) => {
  res.send('Hello World');
});

app.use('/api/users', usersRoutes);
app.use('/api/products', productsRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
