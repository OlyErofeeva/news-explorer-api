const Article = require('../models/article');
const NotFoundError = require('../errors/not-found-error');
const ForbiddenError = require('../errors/forbidden-error');
const { ARTICLE_NOT_FOUND_MESSAGE, ARTICLE_REMOVE_FORBIDDEN_MESSAGE } = require('../configs/error-messages');

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
    .then((article) => res.send({ _id: article._id }))
    .catch((err) => next(err));
};

module.exports.removeArticleBookmark = (req, res, next) => {
  const { id } = req.params;
  Article.findById(id)
    .then((article) => {
      if (!article) {
        throw new NotFoundError(ARTICLE_NOT_FOUND_MESSAGE);
      }

      if (article.owner !== req.user._id) { // TODO (card.owner._id.toString() !== req.user._id)
        throw new ForbiddenError(ARTICLE_REMOVE_FORBIDDEN_MESSAGE);
      }

      return Article.findByIdAndRemove(id)
        .then(() => res.send(article))
        .catch((err) => next(err));
    })
    .catch((err) => next(err));
};
