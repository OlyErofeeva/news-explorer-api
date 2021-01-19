const router = require('express').Router();

const auth = require('../middlewares/auth');
const { getCurrentUser } = require('../controllers/users-controller');

router.use(auth);

// GET: возвращает данные текущего пользователя
router.get('/user/me', getCurrentUser);

module.exports = router;
