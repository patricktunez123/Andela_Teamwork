/* eslint-disable linebreak-style */
const articlePosted = require('../models/articles');
const commentOnArticle = require('../helpers/commentOnArticle');


const newComment = (req, res) => {
  const { error } = commentOnArticle.validation(req.body);

  if (error) {
    return res.status(400).json({
      status: 400,
      error: error.details[0].message,
    });
  }


  const paramId = parseInt(req.params.id);

  const checkPostedArticle = articlePosted.find((posted) => posted.id === paramId);

  if (!checkPostedArticle) {
    return res.status(404).json({
      status: 404,
      error: 'Article was not found. Maybe it was removed',
    });
  }


  // if (checkPostedArticle.articleOwner !== checkPostedArticle.id) {
  //   return res.status(403).json({
  //     status: 403,
  //     error: 'Access Forbidden',
  //   });
  // }

  // checkPostedArticle.articleOwner = parseInt(req.body.id, 10);

  return res.status(201).json({
    status: 201,
    message: 'relevant-success-message',
    data: {
      created_on: checkPostedArticle.created_on,
      title: checkPostedArticle.title,
      article: checkPostedArticle.article,
      comment: req.body.comment,
    },
  });
};

module.exports = newComment;