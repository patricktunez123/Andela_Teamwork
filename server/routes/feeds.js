/* eslint-disable linebreak-style */
const express = require('express');
const feeds = require('../controllers/feeds');
const auth = require('../middleware/authorization');

const router = express.Router();

router.get('/', auth, feeds);
module.exports = router;
