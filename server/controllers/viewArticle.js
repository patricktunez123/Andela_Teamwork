/* eslint-disable linebreak-style */
import articlesArray from '../models/articles';

const viewArticle = (req, res) => {
  const article = articlesArray.find((ar) => ar.id === parseInt(req.params.id, 10));
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

export default viewArticle;
