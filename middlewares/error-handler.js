const { isCelebrateError } = require('celebrate');

const BadRequestError = require('../errors/bad-request-error');
const { INTERNAL_ERROR_MESSAGE } = require('../configs/error-messages');

const sendError = (err, res) => {
  const { statusCode = 500, message } = err;
  res.status(statusCode).send({
    message: statusCode === 500
      ? INTERNAL_ERROR_MESSAGE
      : message,
  });
};

module.exports.errorHandler = ((err, req, res, next) => {
  // Обработка ошибок валидации на уровне проверки запроса
  if (isCelebrateError(err)) {
    const celebrateErrorMessage = Array.from(err.details.values())
      .map((errDetails) => errDetails.message)
      .join('. ');
    const celebrateError = new BadRequestError(celebrateErrorMessage);

    return sendError(celebrateError, res);
  }

  // Обработка ошибок валидации на уровне базы данных
  if (err.name === 'ValidationError') {
    const mongoError = new BadRequestError(err.message);
    return sendError(mongoError, res);
  }

  // Остальные ошибки
  sendError(err, res);
  return next();
});
