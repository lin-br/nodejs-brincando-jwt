const jwtService = require('./JwtService');

class IndexService {

    static index(token = '') {
        try {
            return jwtService.verificarJwt(token);
        } catch (e) {
            console.log(e);
            return null;
        }
    }
}

module.exports = IndexService;