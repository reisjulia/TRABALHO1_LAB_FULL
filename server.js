
const express = require('express');  
const dotenv = require('dotenv'); 
const userRoutes = require('./src/routes/UserRoutes'); 

dotenv.config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3333;

app.get('/', (req, res) => {
    res.send('Servidor funcionando');
});

app.use('/api/users', userRoutes);

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});