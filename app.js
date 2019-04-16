const express = require('express');
const LoginController = require('./controller/LoginController');
const IndexController = require('./controller/IndexController');

const app = express();

app.use(express.json());
app.use('/login', LoginController);
app.use('/', IndexController);

app.listen('3000', function () {
    console.log(`Servidor rodando na porta ${this.address().port}`);
});