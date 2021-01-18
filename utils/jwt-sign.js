const jwt = require('jsonwebtoken');
const { NODE_ENV, JWT_SECRET } = require('../configs/index');

const jwtSign = (payload, expiresIn) => jwt.sign(
  payload,
  NODE_ENV === 'production' ? JWT_SECRET : 'dev-jwt-secret',
  { expiresIn },
);

module.exports = jwtSign;
