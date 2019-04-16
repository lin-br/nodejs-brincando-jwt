const express = require('express');

const app = express();

app.post('/login', function (request, response) {
    response.send('OK');
});

app.listen('3000', function () {
    console.log(`Servidor rodando na porta ${this.address().port}`);
});