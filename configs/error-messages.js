// statusCode = 400 error messages (validation)
const requiredMessageTemplate = (fieldName) => `Отсутствует обязательное поле "${fieldName}"`;
const emptyFieldMessageTemplate = (fieldName) => `Поле "${fieldName}" не может быть пустым`;
const stringTypeMessageTemplate = (fieldName) => `Поле "${fieldName}" должно быть строкой`;
const incorrectFormatMessageTemplate = (fieldName) => `Некорректный формат поля "${fieldName}"`;
const incorrectParamMessageTemplate = (paramName) => `Некорректный формат параметра "${paramName}"`;
const minLengthMessageTemplate = (fieldName, fieldMinLength) => `Минимальная длина поля "${fieldName}" - ${fieldMinLength}`;
const maxLengthMessageTemplate = (fieldName, fieldMaxLength) => `Максимальная длина поля "${fieldName}" - ${fieldMaxLength}`;

// statusCode = 401 error messages
const USER_UNAUTHORIZED_MESSAGE = 'Доступ к запрашиваемому ресурсу разрешен только авторизованным пользователям';
const USER_LOGIN_FAILED_MESSAGE = 'Неправильные почта или пароль';
const USER_TOKEN_INCORRECT_FORMAT_MESSAGE = 'Токен не передан или передан некорректно';
const USER_TOKEN_INVALID_MESSAGE = 'Переданный токен невалиден';

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
  requiredMessageTemplate,
  emptyFieldMessageTemplate,
  stringTypeMessageTemplate,
  incorrectFormatMessageTemplate,
  incorrectParamMessageTemplate,
  minLengthMessageTemplate,
  maxLengthMessageTemplate,

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
