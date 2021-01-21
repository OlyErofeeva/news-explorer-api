const { INTERNAL_ERROR_MESSAGE } = require('../utils/error-messages');

module.exports.errorHandler = ((err, req, res, next) => {
  const { statusCode = 500, message } = err;

  res.status(statusCode).send({
    message: statusCode === 500
      ? INTERNAL_ERROR_MESSAGE
      : message,
  });

  next();
});
