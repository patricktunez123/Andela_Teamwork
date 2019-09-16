/* eslint-disable linebreak-style */
const Joi = require('joi');

const articlePost = {

  validation(newArticlePost) {
    const articlePostValidation = {
      title: Joi.string().required().trim(),
      article: Joi.string().required().trim(),
    };

    return Joi.validate(newArticlePost, articlePostValidation);
  },

};

module.exports = articlePost;
