/* eslint-disable linebreak-style */
const express = require('express');
const articles = require('../controllers/articles');
const updatePostedArticle = require('../controllers/updatepostedarticle');
const deleteArticle = require('../controllers/deleteArticle');
const auth = require('../middleware/authorization');

const router = express.Router();

router.post('/', auth, articles);
router.patch('/:id/', auth, updatePostedArticle);
router.delete('/:id/', auth, deleteArticle);
module.exports = router;
