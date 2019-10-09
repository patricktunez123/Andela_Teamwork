import articlePosted from '../models/articles';

const newFlag = (req, res) => {
  try {
    const paramId = parseInt(req.params.id, 10);

    const checkPostedArticle = articlePosted.find((posted) => posted.id === paramId);

    if (!checkPostedArticle) {
      return res.status(404).json({
        status: 404,
        error: 'Article was not found. Maybe it was removed',
      });
    }

    let flagId = 0;
    if (checkPostedArticle.flags.length === 0) flagId = 1;
    else flagId = parseInt(checkPostedArticle.flags.length + 1, 10);
    const flagged = {

      flagNumber: flagId,
    };
    checkPostedArticle.flags.push(flagged);
    return res.status(200).json({
      status: 200,
      message: 'Flagged',
      data: {
        created_on: checkPostedArticle.created_on,
        title: checkPostedArticle.title,
        article: checkPostedArticle.article,
        flags: [
          flagged,
        ],
      },
    });
  } catch (err) {
    return err;
  }
};

export default newFlag;
