const router = require('express').Router();

const { createUser, login } = require('../controllers/users-controller');
const {
  validateUserBody,
  validateAuthentication,
} = require('../middlewares/validation-rules');

// POST: создаёт пользователя с переданными email, password, name
router.post('/signup', validateUserBody, createUser);

// POST: проверяет переданные email и password, возвращает JWT
router.post('/signin', validateAuthentication, login);

module.exports = router;
