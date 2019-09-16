const Joi = require('joi');

const updateArticlePosted = {
  validation(article) {
    const updateArticle = {
      title: Joi.string().required().trim(),
      article: Joi.string().required().trim(),
    };
    return Joi.validate(article, updateArticle);
  },
};

module.exports = updateArticlePosted;
