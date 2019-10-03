import bcrypt from 'bcrypt';
import ENV from 'dotenv';
import jwt from 'jsonwebtoken';
import userValidation from '../helpers/signup';
import users from '../models/signup';


ENV.config();

const signup = (req, res) => {
  try {
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

    let id = 0;
    if (users.length === 0) id = 1;
    else id = parseInt(users.length + 1, 10);

    const payload = {
      id,
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
      id,
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
  } catch (err) {
    return err;
  }
};


export default signup;
