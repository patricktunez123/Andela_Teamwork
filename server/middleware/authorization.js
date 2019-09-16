const jwt = require('jsonwebtoken');
const ENV = require('dotenv');

ENV.config();

const authorize = (req, res, next) => {
  const token = req.header('x-auth-token');

  if (!token) {
    return res.status(401).json({
      status: 401,
      error: 'No token, Please provide your token',
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_KEY);
    req.user = decoded;
    next();
  } catch (ex) {
    return res.status(400).json({
      status: 400,
      error: 'Please use a correct token',
    });
  }
};

module.exports = authorize;
