const router = require('express').Router();

const auth = require('./auth');
const usersRouter = require('./users-router');
const articlesRouter = require('./articles-router');

router.use(
  auth,
  usersRouter,
  articlesRouter,
);

module.exports = router;
