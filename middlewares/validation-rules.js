const { celebrate, Joi } = require('celebrate');
const validator = require('validator');
const { ObjectId } = require('mongoose').Types;
const {
  REQUIRED_FIELD_MESSAGE,
  EMPTY_FIELD_MESSAGE,
  STRING_TYPE_MESSAGE,
  INCORRECT_FIELD_FORMAT_MESSAGE,
  INCORRECT_PARAM_FORMAT_MESSAGE,
  MIN_LENGTH_MESSAGE,
  MAX_LENGTH_MESSAGE,
} = require('../configs/error-messages');

const emailRule = Joi.string().trim().lowercase()
  .required()
  .email()
  .messages({
    'any.required': REQUIRED_FIELD_MESSAGE,
    'string.base': STRING_TYPE_MESSAGE,
    'string.empty': EMPTY_FIELD_MESSAGE,
    'string.email': INCORRECT_FIELD_FORMAT_MESSAGE,
  });

const passwordRule = Joi.string().trim()
  .required()
  .min(8)
  .messages({
    'any.required': REQUIRED_FIELD_MESSAGE,
    'string.base': STRING_TYPE_MESSAGE,
    'string.empty': EMPTY_FIELD_MESSAGE,
    'string.min': MIN_LENGTH_MESSAGE,
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
        'any.required': REQUIRED_FIELD_MESSAGE,
        'string.base': STRING_TYPE_MESSAGE,
        'string.empty': EMPTY_FIELD_MESSAGE,
        'string.min': MIN_LENGTH_MESSAGE,
        'string.max': MAX_LENGTH_MESSAGE,
      }),
  }),
}, { abortEarly: false });

module.exports.validateAuthentication = celebrate({
  body: Joi.object().keys({
    email: emailRule,
    password: passwordRule,
  }),
}, { abortEarly: false });

module.exports.validateArticleBody = celebrate({
  body: Joi.object().keys({
    keyword: Joi.string().trim().lowercase()
      .required()
      .messages({
        'any.required': REQUIRED_FIELD_MESSAGE,
        'string.base': STRING_TYPE_MESSAGE,
        'string.empty': EMPTY_FIELD_MESSAGE,
      }),

    title: Joi.string()
      .required()
      .messages({
        'any.required': REQUIRED_FIELD_MESSAGE,
        'string.base': STRING_TYPE_MESSAGE,
        'string.empty': EMPTY_FIELD_MESSAGE,
      }),

    text: Joi.string()
      .required()
      .messages({
        'any.required': REQUIRED_FIELD_MESSAGE,
        'string.base': STRING_TYPE_MESSAGE,
        'string.empty': EMPTY_FIELD_MESSAGE,
      }),

    date: Joi.string()
      .required()
      .messages({
        'any.required': REQUIRED_FIELD_MESSAGE,
        'string.base': STRING_TYPE_MESSAGE,
        'string.empty': EMPTY_FIELD_MESSAGE,
      }),

    source: Joi.string()
      .required()
      .messages({
        'any.required': REQUIRED_FIELD_MESSAGE,
        'string.base': STRING_TYPE_MESSAGE,
        'string.empty': EMPTY_FIELD_MESSAGE,
      }),

    link: Joi.string()
      .required()
      .custom((value, helpers) => {
        if (validator.isURL(value)) {
          return value;
        }
        return helpers.message(INCORRECT_FIELD_FORMAT_MESSAGE);
      })
      .messages({
        'any.required': REQUIRED_FIELD_MESSAGE,
        'string.base': STRING_TYPE_MESSAGE,
        'string.empty': EMPTY_FIELD_MESSAGE,
      }),

    image: Joi.string()
      .required()
      .custom((value, helpers) => {
        if (validator.isURL(value)) {
          return value;
        }
        return helpers.message(INCORRECT_FIELD_FORMAT_MESSAGE);
      })
      .messages({
        'any.required': REQUIRED_FIELD_MESSAGE,
        'string.base': STRING_TYPE_MESSAGE,
        'string.empty': EMPTY_FIELD_MESSAGE,
      }),
  }),
}, { abortEarly: false });

module.exports.validateObjectIdParam = celebrate({
  params: Joi.object().keys({
    id: Joi.string()
      .custom((value, helpers) => {
        if (ObjectId.isValid(value)) {
          return value;
        }
        return helpers.message(INCORRECT_PARAM_FORMAT_MESSAGE);
      }),
  }),
}, { abortEarly: false });
