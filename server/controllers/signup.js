/* eslint-disable linebreak-style */
const bcrypt = require('bcrypt');
const ENV = require('dotenv');
const jwt = require('jsonwebtoken');
const userValidation = require('../helpers/signup');
const users = require('../models/signup');


ENV.config();

const signup = (req, res) => {
  const { error } = userValidation.validation(req.body);

  if (error) {
    res.status(400).json({
      status: 400,
      error: error.details[0].message,
    });

    return;
  }

  const email = users.find((user) => user.email === req.body.email);

  if (email) {
    res.status(400).json({
      status: 400,
      error: ' Your email has already been used. Pls try another email ',
    });

    return;
  }

  var _id = 0;
  if(users.length == 0) _id = 1;
  else _id = parseInt(users.length + 1, 10);

  const payload = {
    id: _id,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    gender: req.body.gender,
    jobRole: req.body.jobRole,
    department: req.body.department,
    address: req.body.address,
    is_admin: req.body.is_admin,
  };

  const token = jwt.sign(payload, process.env.JWT_KEY, { expiresIn: '1d' });

  const password = bcrypt.hashSync(req.body.password, 10);

  const newUser = {
    id: _id,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    password,
    gender: req.body.gender,
    jobRole: req.body.jobRole,
    department: req.body.department,
    address: req.body.address,
    is_admin: req.body.is_admin,
  };

  users.push(newUser);

  res.status(201).json({
    status: 201,
    message: 'User created successfully',
    data: {
      token,
    },
  });
};


module.exports = signup;
