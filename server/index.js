/* eslint-disable linebreak-style */
const express = require('express');
const bodyParser = require('body-parser');
const signupRouter = require('./routes/signup');
const signin = require('./routes/signin');
const articles = require('./routes/articles');

const app = express();

app.use(express.json());
app.use(bodyParser.json());

app.use('/api/v1/auth/signup', signupRouter);
app.use('/api/v1/auth/signin', signin);
app.use('/api/v1/articles', articles);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});


module.exports = app;
