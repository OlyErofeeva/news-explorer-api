const bcrypt = require('bcrypt');

const User = require('../models/user');
const NotFoundError = require('../errors/not-found-error');
const ConflictError = require('../errors/conflict-error');
const jwtSign = require('../utils/jwt-sign');
const { SALT_ROUND } = require('../configs/index');

module.exports.createUser = (req, res, next) => {
  const { email, password, name } = req.body;

  User.findOne({ email })
    .then((user) => {
      if (user) {
        throw new ConflictError();
      }
      return bcrypt.hash(password, SALT_ROUND);
    })
    .then((hash) => User.create({
      email,
      password: hash,
      name,
    }))
    .then((user) => res.send({ _id: user._id }))
    .catch((err) => next(err)); // TODO: (err) => validationErrorHandler(err, next)
};

module.exports.login = (req, res, next) => {
  const { email, password } = req.body;

  return User.findUserByCredentials(email, password)
    .then((user) => {
      const token = jwtSign({ _id: user._id }, '7d');
      res.send({ token });
    })
    .catch((err) => next(err));
};

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
