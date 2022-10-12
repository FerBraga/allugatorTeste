const jwt = require('jsonwebtoken');

const jwtKey = process.env.JWT_SECRET || 'senhaSecreta';

const jwtConfig = {
    expiresIn: '15d',
    algorithm: 'HS256',
};

const generateToken = (payload) => jwt.sign({ ...payload }, jwtKey, jwtConfig);

module.exports = {
    generateToken,
};
