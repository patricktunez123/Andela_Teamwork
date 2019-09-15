const express = require('express');

const signin = require('../controllers/signin');

const router = express.Router();

router.post('/', signin);

module.exports = router;
