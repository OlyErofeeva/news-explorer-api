const { celebrate, Joi } = require('celebrate');
const validator = require('validator');
const { ObjectId } = require('mongoose').Types;

module.exports.validateUserBody = celebrate({
  body: Joi.object().keys({ // TODO - custom messages
    email: Joi.string().required().email().lowercase(),
    password: Joi.string().required().trim().min(8),
    name: Joi.string().trim().min(2).max(30)
      .required(),
  }),
});

module.exports.validateAuthentication = celebrate({
  body: Joi.object().keys({ // TODO - custom messages
    email: Joi.string().required().email().lowercase(),
    password: Joi.string().required().trim().min(8),
  }),
});

module.exports.validateArticleBody = celebrate({
  body: Joi.object().keys({ // TODO - custom messages
    keyword: Joi.string().required().lowercase(),
    title: Joi.string().required(),
    text: Joi.string().required(),
    date: Joi.string().required(),
    source: Joi.string().required(),

    link: Joi.string().required().custom((value, helpers) => {
      if (validator.isURL(value)) {
        return value;
      }
      return helpers.message('message1'); // TODO message
    }),

    image: Joi.string().required().custom((value, helpers) => {
      if (validator.isURL(value)) {
        return value;
      }
      return helpers.message('message2'); // TODO message
    }),
  }),
});

module.exports.validateObjectIdParam = celebrate({
  params: Joi.object().keys({ // TODO - custom messages
    id: Joi.string().required().custom((value, helpers) => {
      if (ObjectId.isValid(value)) {
        return value;
      }
      return helpers.message('message3'); // TODO message
    }),
  }),
});
