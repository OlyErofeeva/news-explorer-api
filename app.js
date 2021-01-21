const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const { errors } = require('celebrate');

const routes = require('./routes/index');
const limiter = require('./configs/rate-limiter');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const { errorHandler } = require('./middlewares/error-handler');
const NotFoundError = require('./errors/not-found-error');
const { ROUTE_NOT_FOUND_MESSAGE } = require('./utils/error-messages');

const app = express();
const { PORT = 3000, MONGO_URL = 'mongodb://localhost:27017/newsdb' } = process.env;

mongoose.connect(MONGO_URL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

app.use(cors());
app.use(requestLogger);
app.use(limiter);
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(routes);
app.use('*', (req, res, next) => {
  next(new NotFoundError(ROUTE_NOT_FOUND_MESSAGE));
  // TODO защитить все авторизацией. Авторизованным - 404
});

app.use(errorLogger);
app.use(errors());
app.use(errorHandler);

app.listen(PORT);
