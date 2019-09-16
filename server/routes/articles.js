/* eslint-disable linebreak-style */
const express = require('express');
const articles = require('../controllers/articles');
const auth = require('../middleware/authorization');

const router = express.Router();

router.post('/', auth, articles);

module.exports = router;
