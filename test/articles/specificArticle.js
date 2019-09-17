/* eslint-disable no-trailing-spaces */
/* eslint-disable linebreak-style */
require('dotenv').config();
const chai = require('chai');
const { describe, it } = require('mocha');
const http = require('chai-http');
const jwt = require('jsonwebtoken');
const app = require('../../server/index');

chai.use(http);
chai.should();

describe('When a user wants to view an article ', () => {
  it('should not be able to view an article when no token provided', (done) => {
    chai.request(app)
      .get('/api/v1/articles/1')
      .send()
      .end((err, res) => {
        res.should.have.status(401);
        done();
      });
  });

  const payload = {
    id: 1,
    first_name: 'Patrick',
    last_name: 'Tunezerwane',
    email: 'tp@gmail.com',
    password: '$2b$10$utvkNCuMn9aEsKCtnKDrfeKGuaElyOt.4bI3Seo3cFpsq8Ep.O0du',
    gender: 'Male',
    jobRole: 'Manager',
    department: 'ICT',
    address: 'Kigali',
    is_admin: false,
  };
  const token = jwt.sign(payload, process.env.JWT_KEY, { expiresIn: '1d' });

  it('should not be able to view an article which is not available ', (done) => {
    chai.request(app)
      .get('/api/v1/articles/9000')
      .set('x-auth-token', token)
      .send()
      .end((err, res) => {
        res.should.have.status(404);
        res.should.be.an('object');
        res.body.should.have.property('status').eql(404);
        res.body.should.have.property('error');
        done();
      });
  }); 

  it('should be able to view an article', (done) => {
    chai.request(app)
      .get('/api/v1/articles/1')
      .set('x-auth-token', token)
      .send()
      .end((err, res) => {
        res.should.have.status(200);
        res.should.be.an('object');
        res.body.should.have.property('status').eql(200);
        res.body.should.have.property('data');
        done();
      });
  });
});
