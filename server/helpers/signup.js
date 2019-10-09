import Joi from 'joi';


const register = {

  validation(user) {
    const uservalidation = {
      first_name: Joi.string().min(2).max(20).required()
        .trim(),
      last_name: Joi.string().min(2).max(20).required()
        .trim(),
      email: Joi.string().email().required().trim(),
      password: Joi.string().min(5).max(10).required()
        .trim(),
      is_admin: Joi.boolean().strict().required(),
      gender: Joi.string().min(1).max(6).required(),
      jobRole: Joi.string().min(1).max(20).required(),
      department: Joi.string().min(1).max(20).required(),
      address: Joi.string().required().max(20).trim(),
    };

    return Joi.validate(user, uservalidation);
  },

};


export default register;
