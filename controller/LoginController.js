const express = require('express');
const router = express.Router();
const LoginService = require('../service/LoginService');

router.post('/', (request, response) => {
    let {usuario, senha} = request.body;

    let login = LoginService.login(usuario, senha);

    if (login) {
        response.header('Authorization', `Bearer ${login}`).send();
    } else {
        response.status(401).send();
    }
});

module.exports = router;