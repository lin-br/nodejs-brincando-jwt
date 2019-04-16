const express = require('express');
const apiJwt = require('jsonwebtoken');

const app = express();

app.use(express.json());

app.post('/login', function (request, response) {
    let {usuario, senha} = request.body;

    let payload = usuario === 'teste' && senha === '1234' ? {'id': 32141} : null;

    console.log(usuario, senha, payload);

    let token = apiJwt.sign(payload, 'txp2wk99k6UKGM9Lr+DX29v0lntp9RTwQUiv+ZzOYoA=', {
        algorithm: 'HS512',
        expiresIn: 10,
    });

    response.send(token);
});

app.listen('3000', function () {
    console.log(`Servidor rodando na porta ${this.address().port}`);
});