const jwtVerify = require('../utils/jwt-verify');
const UnauthorizedError = require('../errors/unauthorized-error');

module.exports = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization || !authorization.startsWith('Bearer ')) {
    return next(new UnauthorizedError('Токен не передан или передан не в том формате'));
  }

  const token = authorization.replace('Bearer ', '');
  const userInfo = jwtVerify(token); // token's decoded payload

  if (!userInfo) {
    return next(new UnauthorizedError('Переданный токен некорректен'));
  }

  req.user = userInfo;

  return next();
};
