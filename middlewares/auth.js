const jwtVerify = require('../utils/jwt-verify');
const UnauthorizedError = require('../errors/unauthorized-error');
const { USER_TOKEN_INCORRECT_FORMAT_MESSAGE, USER_TOKEN_INVALID_MESSAGE } = require('../utils/error-messages');

module.exports = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization || !authorization.startsWith('Bearer ')) {
    return next(new UnauthorizedError(USER_TOKEN_INCORRECT_FORMAT_MESSAGE));
  }

  const token = authorization.replace('Bearer ', '');
  const userInfo = jwtVerify(token); // token's decoded payload

  if (!userInfo) {
    return next(new UnauthorizedError(USER_TOKEN_INVALID_MESSAGE));
  }

  req.user = userInfo;

  return next();
};
