const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../configs');

const jwtSign = (payload, expiresIn) => jwt.sign(payload, JWT_SECRET, { expiresIn });

module.exports = jwtSign;
