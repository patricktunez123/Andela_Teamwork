import moment from 'moment';
import postValidation from '../helpers/articlePost';
import articlePost from '../models/articles';


const newArticlePost = (req, res) => {
  try {
    const { error } = postValidation.validation(req.body);

    if (error) {
      return res.status(400).json({
        status: 400,
        error: error.details[0].message,
      });
    }


    let id = 0;
    if (articlePost.length === 0) id = 1;
    else id = parseInt(articlePost.length + 1, 10);


    const newArticle = {
      id,
      created_on: moment().format('LL'),
      authorEmailId: req.user.email,
      title: req.body.title,
      article: req.body.article,
      flags: [

      ],
      comments: [

      ],
    };

    articlePost.push(newArticle);

    return res.status(201).json({
      status: 201,
      message: 'article successfully created',
      data: {
        id: newArticle.id,
        created_on: moment().format('LL'),
        authorEmailId: req.user.email,
        title: req.body.title,
        article: req.body.article,
      },
    });
  } catch (err) {
    return err;
  }
};

export default newArticlePost;
