import articlePosted from '../models/articles';
import updatepostedarticle from '../helpers/articlePost';


const newPostedArticle = (req, res) => {
  try {
    const { error } = updatepostedarticle.validation(req.body);

    if (error) {
      return res.status(400).json({
        status: 400,
        error: error.details[0].message,
      });
    }


    const paramId = parseInt(req.params.id, 10);

    const checkPostedArticle = articlePosted.find((posted) => posted.id === paramId);

    if (!checkPostedArticle) {
      return res.status(404).json({
        status: 404,
        error: 'No such article was posted',
      });
    }
    checkPostedArticle.title = req.body.title;
    checkPostedArticle.article = req.body.article;
    if (checkPostedArticle) {
      return res.status(200).json({
        status: 200,
        message: 'article successfully edited',
        data: {
          id: checkPostedArticle.id,
          articleOwner: checkPostedArticle.articleOwner,
          email: checkPostedArticle.email,
          created_on: checkPostedArticle.created_on,
          title: checkPostedArticle.title,
          article: checkPostedArticle.article,
        },
      });
    }
  } catch (err) {
    return err;
  }
};

export default newPostedArticle;
