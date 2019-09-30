/* eslint-disable consistent-return */
/* eslint-disable linebreak-style */
const ENV = require('dotenv');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const loginValidation = require('../helpers/signin');
const users = require('../models/signup');

ENV.config();

const userLogin = (req, res) => {
  const { error } = loginValidation.validation(req.body);

  if (error) {
    res.status(400).json({
      status: 400,
      error: 'Incorrect email or password',
    });

    return;
  }

  const checkUser = users.find((user) => user.email === req.body.email);

  if (!checkUser) {
    return res.status(400).json({
      status: 400,
      error: 'Incorrect email or password',

    });
  }

  const checkPassword = bcrypt.compareSync(req.body.password.trim(), checkUser.password);

  if (!checkPassword) {
    return res.status(400).json({
      status: 400,
      error: 'Incorrect email or password',
    });
  }

  const loginPayload = {
    id: checkUser.id,
    first_name: checkUser.first_name,
    last_name: checkUser.last_name,
    email: checkUser.email,
    gender: checkUser.gender,
    jobRole: checkUser.jobRole,
    department: checkUser.department,
    address: checkUser.address,
    is_admin: checkUser.is_admin,
  };


  const token = jwt.sign(loginPayload, process.env.JWT_KEY, { expiresIn: '1d' });

  res.status(200).json({
    status: 200,
    message: 'User is successfully logged in',
    data: {
      token,
    },
  });
};


module.exports = userLogin;
