const SALT_ROUND = 10;
const { NODE_ENV, JWT_SECRET } = process.env;

module.exports = {
  SALT_ROUND,
  NODE_ENV,
  JWT_SECRET,
};
