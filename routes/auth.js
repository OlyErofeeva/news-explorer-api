const router = require('express').Router();

const { createUser, login } = require('../controllers/users-controller');
// TODO: validation - celebrate

// POST: создаёт пользователя с переданными email, password, name
router.post('/signup', createUser);

// POST: проверяет переданные email и password, возвращает JWT
router.post('/signin', login);

module.exports = router;
