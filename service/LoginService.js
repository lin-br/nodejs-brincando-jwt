const jwtService = require('./JwtService');

const USUARIO = 'lin';
const SENHA = '123456';

class LoginService {

    static login(usuario = '', senha = '') {
        if (usuario === USUARIO && senha === SENHA) {
            return jwtService.gerarJwt({'usuario': usuario, 'senha': senha});
        }
        return null;
    }
}

module.exports = LoginService;