import express from 'express';
import articles from '../controllers/articles';
import updatePostedArticle from '../controllers/updatepostedarticle';
import deleteArticle from '../controllers/deleteArticle';
import comments from '../controllers/comments';
import flag from '../controllers/flag';
import viewArticle from '../controllers/viewArticle';
import auth from '../middleware/authorization';

const router = express.Router();

router.post('/', auth, articles);
router.patch('/:id/', auth, updatePostedArticle);
router.delete('/:id/', auth, deleteArticle);
router.post('/:id/comments/', auth, comments);
router.post('/:id', auth, flag);
router.get('/:id/', auth, viewArticle);

export default router;
