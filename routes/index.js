const router = require('express').Router();

const auth = require('./auth-router');
const usersRouter = require('./users-router');
const articlesRouter = require('./articles-router');

const NotFoundError = require('../errors/not-found-error');
const { ROUTE_NOT_FOUND_MESSAGE } = require('../configs/error-messages');

router.use(
  auth,
  usersRouter,
  articlesRouter,
);
router.use('*', (req, res, next) => {
  next(new NotFoundError(ROUTE_NOT_FOUND_MESSAGE));
});

module.exports = router;
