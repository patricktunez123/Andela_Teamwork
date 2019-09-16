/* eslint-disable linebreak-style */
const Joi = require('joi');

const login = {
  validation(user) {
    const loginvalidation = {
      email: Joi.string().email().required().min(5)
        .max(20),
      password: Joi.string().min(6).max(12).required(),
    };

    return Joi.validate(user, loginvalidation);
  },
};


module.exports = login;
