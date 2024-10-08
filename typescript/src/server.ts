import express from 'express';
import router from './routes/userRoutes';

const app = express();
const PORT = 3000;

app.use(express.json());

app.use('/users', router);

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
})