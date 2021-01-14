const router = require('express').Router();

const { getCurrentUser } = require('../controllers/users-controller');
// TODO: auth check

// GET: данные текущего пользователя
router.get('/user/me', getCurrentUser);

module.exports = router;
