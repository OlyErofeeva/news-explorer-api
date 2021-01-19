const jwt = require('jsonwebtoken');
const { NODE_ENV, JWT_SECRET } = require('../configs/index');

const jwtVerify = (token) => {
  try {
    const decoded = jwt.verify(token, NODE_ENV === 'production' ? JWT_SECRET : 'dev-jwt-secret');
    return decoded;
  } catch (err) {
    return false;
  }
};

module.exports = jwtVerify;
