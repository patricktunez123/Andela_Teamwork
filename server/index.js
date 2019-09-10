/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
// eslint-disable-next-line linebreak-style
const Joi = require('joi');
const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to Teamwork App');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});