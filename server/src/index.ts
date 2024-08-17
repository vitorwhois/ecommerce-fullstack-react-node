import express, { Application } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import usersRoutes from './routes/usersRoutes';
import productsRoutes from './routes/productsRoutes';
import corsConfig from './config/corsConfig';

dotenv.config();

const app: Application = express();

// Middleware para analisar JSON
app.use(express.json());

app.use(corsConfig);

// Conectar ao MongoDB
mongoose.connect(process.env.MONGO_URI as string)
    .then(() => console.log('Conectado ao MongoDB'))
    .catch((error) => console.error('Erro ao conectar ao MongoDB:', error));


// Usar as rotas
app.use('/api/users', usersRoutes);
app.use('/api/products', productsRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
