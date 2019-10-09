import Joi from 'joi';

const commentOnArticle = {
  validation(cmt) {
    const articleComment = {
      comment: Joi.string().required().trim(),
    };
    return Joi.validate(cmt, articleComment);
  },
};

export default commentOnArticle;
