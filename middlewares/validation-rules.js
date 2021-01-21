const { celebrate, Joi } = require('celebrate');
const validator = require('validator');
const { ObjectId } = require('mongoose').Types;
const {
  requiredMessageTemplate,
  emptyFieldMessageTemplate,
  stringTypeMessageTemplate,
  incorrectFormatMessageTemplate,
  incorrectParamMessageTemplate,
  minLengthMessageTemplate,
  maxLengthMessageTemplate,
} = require('../configs/error-messages');

const emailRule = Joi.string().trim().lowercase()
  .required()
  .email()
  .messages({
    'any.required': requiredMessageTemplate('email'),
    'string.base': stringTypeMessageTemplate('email'),
    'string.empty': emptyFieldMessageTemplate('email'),
    'string.email': incorrectFormatMessageTemplate('email'),
  });

const passwordRule = Joi.string().trim()
  .required()
  .min(8)
  .messages({
    'any.required': requiredMessageTemplate('password'),
    'string.base': stringTypeMessageTemplate('password'),
    'string.empty': emptyFieldMessageTemplate('password'),
    'string.min': minLengthMessageTemplate('password', '8'),
  });

module.exports.validateUserBody = celebrate({
  body: Joi.object().keys({
    email: emailRule,
    password: passwordRule,
    name: Joi.string().trim()
      .required()
      .min(2)
      .max(30)
      .messages({
        'any.required': requiredMessageTemplate('name'),
        'string.base': stringTypeMessageTemplate('name'),
        'string.empty': emptyFieldMessageTemplate('name'),
        'string.min': minLengthMessageTemplate('name', '2'),
        'string.max': maxLengthMessageTemplate('name', '30'),
      }),
  }),
});

module.exports.validateAuthentication = celebrate({
  body: Joi.object().keys({
    email: emailRule,
    password: passwordRule,
  }),
});

module.exports.validateArticleBody = celebrate({
  body: Joi.object().keys({
    keyword: Joi.string().trim().lowercase()
      .required()
      .messages({
        'any.required': requiredMessageTemplate('keyword'),
        'string.base': stringTypeMessageTemplate('keyword'),
        'string.empty': emptyFieldMessageTemplate('keyword'),
      }),

    title: Joi.string()
      .required()
      .messages({
        'any.required': requiredMessageTemplate('title'),
        'string.base': stringTypeMessageTemplate('title'),
        'string.empty': emptyFieldMessageTemplate('title'),
      }),

    text: Joi.string()
      .required()
      .messages({
        'any.required': requiredMessageTemplate('text'),
        'string.base': stringTypeMessageTemplate('text'),
        'string.empty': emptyFieldMessageTemplate('text'),
      }),

    date: Joi.string()
      .required()
      .messages({
        'any.required': requiredMessageTemplate('date'),
        'string.base': stringTypeMessageTemplate('date'),
        'string.empty': emptyFieldMessageTemplate('date'),
      }),

    source: Joi.string()
      .required()
      .messages({
        'any.required': requiredMessageTemplate('source'),
        'string.base': stringTypeMessageTemplate('source'),
        'string.empty': emptyFieldMessageTemplate('source'),
      }),

    link: Joi.string()
      .required()
      .custom((value, helpers) => {
        if (validator.isURL(value)) {
          return value;
        }
        return helpers.message(incorrectFormatMessageTemplate('link'));
      })
      .messages({
        'any.required': requiredMessageTemplate('link'),
        'string.base': stringTypeMessageTemplate('link'),
        'string.empty': emptyFieldMessageTemplate('link'),
      }),

    image: Joi.string()
      .required()
      .custom((value, helpers) => {
        if (validator.isURL(value)) {
          return value;
        }
        return helpers.message(incorrectFormatMessageTemplate('image'));
      })
      .messages({
        'any.required': requiredMessageTemplate('image'),
        'string.base': stringTypeMessageTemplate('image'),
        'string.empty': emptyFieldMessageTemplate('image'),
      }),
  }),
});

module.exports.validateObjectIdParam = celebrate({
  params: Joi.object().keys({
    id: Joi.string()
      .custom((value, helpers) => {
        if (ObjectId.isValid(value)) {
          return value;
        }
        return helpers.message(incorrectParamMessageTemplate('id'));
      }),
  }),
});
