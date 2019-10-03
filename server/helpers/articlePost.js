/* eslint-disable linebreak-style */
import Joi from 'joi';

const articlePost = {

  validation(newArticlePost) {
    const articlePostValidation = {
      title: Joi.string().required().trim(),
      article: Joi.string().required().trim(),
    };

    return Joi.validate(newArticlePost, articlePostValidation);
  },

};

export default articlePost;
