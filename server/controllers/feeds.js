/* eslint-disable linebreak-style */
import _ from 'lodash';
import feedsArray from '../models/articles';

const feeds = (req, res) => {
  const descending = _.sortBy(feedsArray, 'created_on').reverse();
  return res.status(200).json({
    status: 200,
    message: 'success',
    data:
          descending,
  });
};

export default feeds;
