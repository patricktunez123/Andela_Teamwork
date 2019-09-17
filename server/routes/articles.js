/* eslint-disable linebreak-style */
const express = require('express');
const articles = require('../controllers/articles');
const updatePostedArticle = require('../controllers/updatepostedarticle');
const deleteArticle = require('../controllers/deleteArticle');
const comments = require('../controllers/comments');
const viewArticle = require('../controllers/viewArticle');
const auth = require('../middleware/authorization');

const router = express.Router();

router.post('/', auth, articles);
router.patch('/:id/', auth, updatePostedArticle);
router.delete('/:id/', auth, deleteArticle);
router.post('/:id/comments/', auth, comments);
router.get('/:id/', auth, viewArticle);
module.exports = router;
