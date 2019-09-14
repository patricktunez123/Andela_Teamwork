/* eslint-disable no-trailing-spaces */
/* eslint-disable linebreak-style */
require('dotenv').config();
const chai = require('chai');
const { describe, it } = require('mocha');
const http = require('chai-http');
const jwt = require('jsonwebtoken');
const app = require('../../server/index');

chai.use(http);
chai.expect();

describe('When a user wants to view most recently posted articles ', () => {
  it('should not be able to view most recently posted articles when no token provided', (done) => {
    chai.request(app)
      .get('/api/v1/feeds')
      .send()
      .end((err, res) => {
        res.expect.have.status(401);
        done();
      });
  });

  const payload = {
    id: 1,
    first_name: 'Patrick',
    last_name: 'Tunezerwane',
    email: 'pat@gmail.com',
    password: 'kgl123',
    gender: 'Male',
    jobRole: 'Manager',
    department: 'ICT',
    address: 'Kigali',
    is_admin: false,
  };

  const token = process.env.JWT_KEY;

  jwt.sign(payload, token, { expiresIn: '1d' });

  it('should be able to view most recently posted articles', (done) => {
    chai.request(app)
      .get('/api/v1/feeds')
      .set('x-auth-token', token)
      .send()
      .end((err, res) => {
        res.expect.have.status(200);
        // res.expect.have.status('success');
        res.expect.be.an('array');
        res.body.expect.have.property('status').eql(200);
        res.body.expect.have.property('data');
        done();
      });
  });
});
