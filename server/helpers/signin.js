/* eslint-disable linebreak-style */
const Joi = require('joi');

const login = {
  validation(user) {
    const loginvalidation = {
      email: Joi.string().email().required().min(5)
        .max(20),
      password: Joi.string().min(5).max(10).required(),
    };

    return Joi.validate(user, loginvalidation);
  },
};


module.exports = login;
