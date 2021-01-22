// statusCode = 400 error messages
// request validation messages:
const REQUIRED_FIELD_MESSAGE = 'Отсутствует обязательное поле {#label}';
const EMPTY_FIELD_MESSAGE = 'Поле {#label} не может быть пустым';
const STRING_TYPE_MESSAGE = 'Поле {#label} должно быть строкой';
const INCORRECT_FIELD_FORMAT_MESSAGE = 'Некорректный формат поля {#label}';
const INCORRECT_PARAM_FORMAT_MESSAGE = 'Некорректный формат параметра {#label}';
const MIN_LENGTH_MESSAGE = 'Минимальная длина поля {#label} - {#limit}';
const MAX_LENGTH_MESSAGE = 'Максимальная длина поля {#label} - {#limit}';
// db validation messages:
const DB_URL_FORMAT_MESSAGE = 'invalid URL format';
const DB_EMAIL_FORMAT_MESSAGE = 'invalid email format';

// statusCode = 401 error messages
const USER_UNAUTHORIZED_MESSAGE = 'Для доступа к запрашиваемому ресурсу необходима авторизация';
const USER_LOGIN_FAILED_MESSAGE = 'Ошибка авторизации. Неправильные почта или пароль';
const USER_TOKEN_INCORRECT_FORMAT_MESSAGE = 'Ошибка авторизации. Токен передан некорректно';
const USER_TOKEN_INVALID_MESSAGE = 'Ошибка авторизации. Пожалуйста, авторизуйтесь снова';

// statusCode = 403 error messages
const ARTICLE_REMOVE_FORBIDDEN_MESSAGE = 'Недостаточно прав на удаление выбранной статьи из сохранённых';

// statusCode = 404 error messages
const ROUTE_NOT_FOUND_MESSAGE = 'Запрашиваемый ресурс не найден';
const USER_NOT_FOUND_MESSAGE = 'Пользователь не найден';
const ARTICLE_NOT_FOUND_MESSAGE = 'Статья не найдена';

// statusCode = 409 error messages
const USER_CONFLICT_MESSAGE = 'Пользователь с указанным email уже существует';

// statusCode = 500 error messages
const INTERNAL_ERROR_MESSAGE = 'На сервере произошла ошибка';

module.exports = {
  REQUIRED_FIELD_MESSAGE,
  EMPTY_FIELD_MESSAGE,
  STRING_TYPE_MESSAGE,
  INCORRECT_FIELD_FORMAT_MESSAGE,
  INCORRECT_PARAM_FORMAT_MESSAGE,
  MIN_LENGTH_MESSAGE,
  MAX_LENGTH_MESSAGE,

  DB_URL_FORMAT_MESSAGE,
  DB_EMAIL_FORMAT_MESSAGE,

  USER_UNAUTHORIZED_MESSAGE,
  USER_LOGIN_FAILED_MESSAGE,
  USER_TOKEN_INCORRECT_FORMAT_MESSAGE,
  USER_TOKEN_INVALID_MESSAGE,
  ARTICLE_REMOVE_FORBIDDEN_MESSAGE,
  ROUTE_NOT_FOUND_MESSAGE,
  USER_NOT_FOUND_MESSAGE,
  ARTICLE_NOT_FOUND_MESSAGE,
  USER_CONFLICT_MESSAGE,
  INTERNAL_ERROR_MESSAGE,
};
