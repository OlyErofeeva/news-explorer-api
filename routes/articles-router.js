const router = require('express').Router();

const auth = require('../middlewares/auth');
const { validateArticleBody, validateObjectIdParam } = require('../middlewares/validation');
const {
  getBookmarkedArticles,
  addArticleBookmark,
  removeArticleBookmark,
} = require('../controllers/articles-controller');

router.use(auth);

// GET: возвращает все сохраненные пользователем статьи
router.get('/articles', getBookmarkedArticles);

// POST: добавляет статью с переданными параметрами в сохраненные
router.post('/articles', validateArticleBody, addArticleBookmark);

// DELETE: удаляет статью из сохраненных по id
router.delete('/articles/:id', validateObjectIdParam, removeArticleBookmark);

module.exports = router;
