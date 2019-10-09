import ENV from 'dotenv';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import users from '../models/signup';

ENV.config();

const userLogin = (req, res) => {
  try {
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
  } catch (err) {
    return err;
  }
};


export default userLogin;
