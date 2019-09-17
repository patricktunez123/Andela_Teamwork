const articlePosted = require('../models/articles');
const updatepostedarticle = require('../helpers/updatepostedarticle');


const newPostedArticle = (req, res) => {
  const { error } = updatepostedarticle.validation(req.body);

  if (error) {
    return res.status(400).json({
      status: 400,
      error: error.details[0].message,
    });
  }


  const paramId = parseInt(req.params.id);

  const checkPostedArticle = articlePosted.find((posted) => posted.id === paramId);

  if (!checkPostedArticle) {
    return res.status(404).json({
      status: 404,
      error: 'No such article was posted',
    });
  }


  // if (checkPostedArticle.articleOwner !== checkPostedArticle.id) {
  //   return res.status(403).json({
  //     status: 403,
  //     error: 'Access Forbidden',
  //   });
  // }

  // checkPostedArticle.articleOwner = parseInt(req.body.id, 10);

  return res.status(200).json({
    status: 200,
    message: 'article successfully edited',
    data: {
      id: checkPostedArticle.id,
      articleOwner: checkPostedArticle.articleOwner,
      email: req.user.email,
      created_on: checkPostedArticle.created_on,
      title: req.body.title,
      article: req.body.article,
    },
  });
};

module.exports = newPostedArticle;