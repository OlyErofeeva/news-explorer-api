const router = require('express').Router();

const usersRouter = require('./users-router');
const articlesRouter = require('./articles-router');

router.use(
  usersRouter,
  articlesRouter,
);

module.exports = router;
