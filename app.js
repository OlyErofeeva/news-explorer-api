require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const helmet = require('helmet');

const { PORT, MONGO_URL } = require('./configs');
const routes = require('./routes');
const limiter = require('./configs/rate-limiter');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const { errorHandler } = require('./middlewares/error-handler');

const app = express();

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
app.use(errorLogger);
app.use(errorHandler);

app.listen(PORT);
