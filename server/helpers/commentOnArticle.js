/* eslint-disable linebreak-style */
const Joi = require('joi');

const commentOnArticle = {
  validation(cmt) {
    const articleComment = {
      comment: Joi.string().required().trim(),
    };
    return Joi.validate(cmt, articleComment);
  },
};

module.exports = commentOnArticle;
