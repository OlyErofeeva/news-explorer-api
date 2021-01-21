const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../configs');

const jwtVerify = (token) => {
  try {
    return jwt.verify(token, JWT_SECRET); // decoded token's payload
  } catch (err) {
    return false;
  }
};

module.exports = jwtVerify;
