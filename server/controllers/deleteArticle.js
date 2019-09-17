/* eslint-disable linebreak-style */
const articles = require('../models/articles');

const deleteArticle = (req, res) => {
  const article = articles.find((ar) => ar.id === parseInt(req.params.id));
  if (!article) {
    return res.status(404).json({
      status: 404,
      error: 'The article was not found',
    });
  }

  if (article) {
    const index = articles.indexOf(article);
    articles.splice(index, 1);
    return res.status(200).json({
      status: 204,
      message: 'article successfully deleted',
    });
  }

  // if (checkPostedArticle.articleOwner !== checkPostedArticle.id) {
  //   return res.status(403).json({
  //     status: 403,
  //     error: 'Access Forbidden',
  //   });
  // }

  // checkPostedArticle.articleOwner = parseInt(req.body.id, 10);
};

module.exports = deleteArticle;