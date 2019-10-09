import Joi from 'joi';

const articlePost = {

  validation(newArticlePost) {
    const articlePostValidation = {
      title: Joi.string().required().trim().min(3),
      article: Joi.string().required().trim().min(3),
    };

    return Joi.validate(newArticlePost, articlePostValidation);
  },

};

export default articlePost;
