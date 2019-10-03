import articlePosted from '../models/articles';
import commentOnArticle from '../helpers/commentOnArticle';


const newComment = (req, res) => {
  try {
    const { error } = commentOnArticle.validation(req.body);

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
        error: 'Article was not found. Maybe it was removed',
      });
    }
    let commentId = 0;
    if (checkPostedArticle.comments.length === 0) commentId = 1;
    else commentId = parseInt(checkPostedArticle.comments.length + 1, 10);
    checkPostedArticle.comments.comment = req.body.comment;
    checkPostedArticle.comments.authorId = checkPostedArticle.authorEmailId;
    const author = checkPostedArticle.comments.authorId;
    const c = checkPostedArticle.comments.comment;
    const cmt = {
      commentId,
      authorEmailId: author,
      comment: c,
    };
    checkPostedArticle.comments.push(cmt);
    return res.status(201).json({
      status: 201,
      message: 'Your comment was posted successfully',
      data: {
        created_on: checkPostedArticle.created_on,
        title: checkPostedArticle.title,
        article: checkPostedArticle.article,
        comments: [
          cmt,
        ],
      },
    });
  } catch (err) {
    return err;
  }
};

export default newComment;
