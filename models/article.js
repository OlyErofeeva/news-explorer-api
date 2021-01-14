const mongoose = require('mongoose');
const validator = require('validator');

const articleSchema = new mongoose.Schema({
  keyword: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  source: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
    validate: {
      validator(v) {
        return validator.isURL(v);
      },
      message: 'invalid URL format', // TODO: message
    },
  },
  image: {
    type: String,
    required: true,
    validate: {
      validator(v) {
        return validator.isURL(v);
      },
      message: 'invalid URL format', // TODO: message. Also check required fields messages
    },
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true,
    select: false,
  },
});

module.exports = mongoose.model('article', articleSchema);
