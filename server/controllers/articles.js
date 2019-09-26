/* eslint-disable linebreak-style */
const moment = require('moment');
const users = require('../models/signup');
const postValidation = require('../helpers/articlePost');
const articlePost = require('../models/articles');


const newArticlePost = (req, res) => {
  const { error } = postValidation.validation(req.body);

  if (error) {
    return res.status(400).json({
      status: 400,
      error: error.details[0].message,
    });
  }


  var _id = 0;
  if (articlePost.length === 0) _id = 1;
  else _id = parseInt(articlePost.length + 1, 10);


  const newArticle = {
    id: _id,
    created_on: moment().format('LL'),
    authorEmailId: req.user.email,
    title: req.body.title,
    article: req.body.article,
    comments: [

    ],
  };

  articlePost.push(newArticle);

  return res.status(200).json({
    status: 200,
    message: 'article successfully created',
    data: {
      id: newArticle.id,
      created_on: moment().format('LL'),
      authorEmailId: req.user.email,
      title: req.body.title,
      article: req.body.article,
    },
  });
};

module.exports = newArticlePost;
