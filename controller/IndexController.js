const express = require('express');
const router = express.Router();
const IndexService = require('../service/IndexService');

router.get('/', (request, response) => {
    let headerAuthorization = request.headers.authorization;
    let headerXAccessToken = request.header('x-access-token');

    if (headerAuthorization || headerAuthorization) {

        let token = headerAuthorization ? headerAuthorization.replace('Bearer ', '') : headerXAccessToken;

        if (IndexService.index(token)) {
            response.json({"sistema": "Disse olá!"});
        }

        response.status(401).send()
    }

    response.status(401).send();
});

module.exports = router;