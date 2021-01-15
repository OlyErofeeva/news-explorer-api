const User = require('../models/user');
const NotFoundError = require('../errors/not-found-error');

module.exports.getCurrentUser = (req, res, next) => {
  User.findById(req.user._id)
    .then((user) => {
      if (user) {
        res.send(user);
      } else {
        throw new NotFoundError('Нет пользователя с таким id'); // TODO: message
      }
    })
    .catch((err) => next(err));
};
