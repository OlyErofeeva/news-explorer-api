const router = require('express').Router();

const { getBookmarkedArticles, addArticleBookmark, removeArticleBookmark } = require('../controllers/articles-controller');
// TODO: auth check
// TODO: validation - celebrate

// GET: возвращает все сохраненные пользователем статьи
router.get('/articles', getBookmarkedArticles);

// POST: добавляет статью с переданными параметрами в сохраненные
router.post('/articles', addArticleBookmark);

// DELETE: удаляет статью из сохраненных по id
router.delete('/articles/:id', removeArticleBookmark);

module.exports = router;
