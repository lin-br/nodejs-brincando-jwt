const apiJwt = require('jsonwebtoken');

const CHAVE = 'txp2wk99k6UKGM9Lr+DX29v0lntp9RTwQUiv+ZzOYoA=';

class JwtService {

    static gerarJwt(payload = {}, validade = 300) {
        return apiJwt.sign(payload, CHAVE, {algorithm: 'HS512', expiresIn: validade});
    }

    static verificarJwt(token = '') {
        return apiJwt.verify(token, CHAVE);
    }
}

module.exports = JwtService;