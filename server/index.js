/* eslint-disable linebreak-style */
const config = require('config');
const express = require('express');

const app = express();

app.use(express.json());

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});

if (!config.get('jwtPrivateKey')) {
  console.log('FATAL ERROR!: Key was not defined');
  process.exit(1);
}

module.exports = app;
