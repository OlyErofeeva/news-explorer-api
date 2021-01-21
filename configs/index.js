const {
  PORT = 3000,
  MONGO_URL = 'mongodb://localhost:27017/newsdb',
  JWT_SECRET = 'dev-jwt-secret',
} = process.env;

const SALT_ROUND = 10;

module.exports = {
  PORT,
  MONGO_URL,
  JWT_SECRET,
  SALT_ROUND,
};
