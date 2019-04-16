const jwtService = require('../util/JwtService');

class IndexService {

    static index(token = '') {
        try {
            return jwtService.verificarJwt(token);
        } catch (e) {
            console.log(e.message);
            return null;
        }
    }
}

module.exports = IndexService;