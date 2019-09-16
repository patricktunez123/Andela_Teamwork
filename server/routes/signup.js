/* eslint-disable linebreak-style */
const express = require('express');
const signup = require('../controllers/signup');


const router = express.Router();

router.post('/', signup);

module.exports = router;
