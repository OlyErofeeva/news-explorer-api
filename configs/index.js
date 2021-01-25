const {
  PORT = 3000,
  MONGO_URL = 'mongodb://localhost:27017/newsdb',
  JWT_SECRET = 'dev-jwt-secret',
} = process.env;

const SALT_ROUND = 10;
const JWT_VALIDITY_DURATION = '7d';

module.exports = {
  PORT,
  MONGO_URL,
  JWT_SECRET,
  SALT_ROUND,
  JWT_VALIDITY_DURATION,
};
