import express from 'express';
import feeds from '../controllers/feeds';
import auth from '../middleware/authorization';

const router = express.Router();

router.get('/', auth, feeds);

export default router;
