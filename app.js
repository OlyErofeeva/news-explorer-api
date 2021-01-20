const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const helmet = require('helmet');

const routes = require('./routes/index');
const limiter = require('./configs/rate-limiter');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const NotFoundError = require('./errors/not-found-error');

const app = express();
const { PORT = 3000, MONGO_URL = 'mongodb://localhost:27017/newsdb' } = process.env;

mongoose.connect(MONGO_URL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

app.use(cors());
app.use(helmet());
app.use(bodyParser.json());
app.use(requestLogger);

app.use(limiter);
app.use(routes);
app.use('*', (req, res, next) => {
  next(new NotFoundError('Запрашиваемый ресурс не найден')); // TODO защитить все авторизацией, чтобы нельзя было понять какие роуты есть в приложении. Авторизованным пользователям - 404
});

app.use(errorLogger);

app.listen(PORT);
