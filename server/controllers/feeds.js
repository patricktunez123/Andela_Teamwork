/* eslint-disable linebreak-style */
const _ = require('lodash');
const feedsArray = require('../models/articles');

const feeds = (req, res) => {
  const descending = _.sortBy(feedsArray, 'created_on').reverse();
  return res.status(200).json({
    status: 200,
    message: 'success',
    data:
          descending,
  });
};

module.exports = feeds;
