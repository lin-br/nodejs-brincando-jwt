const express = require('express');
const apiJwt = require('jsonwebtoken');

const app = express();

app.use(express.json());

const chave = 'txp2wk99k6UKGM9Lr+DX29v0lntp9RTwQUiv+ZzOYoA=';

app.post('/login', function (request, response) {
    let {usuario, senha} = request.body;

    let payload = usuario === 'teste' && senha === '1234' ? {'id': 32141} : null;

    console.log(usuario, senha, payload);

    let token = apiJwt.sign(payload, chave, {
        algorithm: 'HS512',
        expiresIn: 300,
    });

    response.send(token);
});

app.get('/', function (request, response) {
    let headerAuthorization = request.headers.authorization;
    let headerXAccessToken = request.header('x-access-token');

    if (headerAuthorization || headerAuthorization) {

        let token = headerAuthorization ? headerAuthorization.replace('Bearer ', '') : headerXAccessToken;

        console.log(token);

        try {
            let verify = apiJwt.verify(token, chave);

            console.log(verify);

            response.send('ok');
        } catch (e) {
            console.log(e);
            response.status(401).send();
        }
    } else {
        response.status(401).send();
    }
});

app.listen('3000', function () {
    console.log(`Servidor rodando na porta ${this.address().port}`);
});