import articles from '../models/articles';

const deleteArticle = (req, res) => {
  try {
    const article = articles.find((ar) => ar.id === parseInt(req.params.id, 10));
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
        status: 200,
        message: 'article successfully deleted',
      });
    }
  } catch (err) {
    return err;
  }
};

export default deleteArticle;
