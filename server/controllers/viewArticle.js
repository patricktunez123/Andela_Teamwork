/* eslint-disable linebreak-style */
const _ = require('lodash');
const articlesArray = require('../models/articles');

const viewArticle = (req, res) => {
  const article = articlesArray.find((ar) => ar.id === parseInt(req.params.id));
  if (!article) {
    return res.status(404).json({
      status: 404,
      error: 'The article was not found',
    });
  }

  if (article) {
    return res.status(200).json({
      status: 200,
      data:
              article,
    });
  }
};

module.exports = viewArticle;
