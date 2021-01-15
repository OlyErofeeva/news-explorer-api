const Article = require('../models/article');
const NotFoundError = require('../errors/not-found-error');
const ForbiddenError = require('../errors/forbidden-error');

module.exports.getBookmarkedArticles = (req, res, next) => {
  Article.find({ owner: req.user._id })
    .then((articles) => res.send(articles))
    .catch((err) => next(err));
};

module.exports.addArticleBookmark = (req, res, next) => {
  const {
    keyword,
    title,
    text,
    date,
    source,
    link,
    image,
  } = req.body;

  Article.create({
    keyword,
    title,
    text,
    date,
    source,
    link,
    image,
    owner: req.user._id,
  })
    .then((article) => res.send(article))
    .catch((err) => next(err));
  // TODO: validation err handler? like: (err) => validationErrorHandler(err, next)
};

module.exports.removeArticleBookmark = (req, res, next) => {
  const { id } = req.params;
  Article.findById(id)
    .then((article) => {
      if (!article) {
        throw new NotFoundError('Нет статьи с таким id в сохраненных'); // TODO: message
      }

      if (article.owner !== req.user._id) { // TODO (card.owner._id.toString() !== req.user._id)
        throw new ForbiddenError('Недостаточно прав на удаление выбранной статьи из сохраненных'); // TODO: message
      }

      return Article.findByIdAndRemove(id)
        .then(() => res.send(article))
        .catch((err) => next(err));
    })
    .catch((err) => next(err));
};
