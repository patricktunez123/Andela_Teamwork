/* eslint-disable linebreak-style */
require('dotenv').config();
const chai = require('chai');
const { describe, it } = require('mocha');
const http = require('chai-http');
const jwt = require('jsonwebtoken');
const app = require('../../server/index');

chai.use(http);
chai.should();

describe('When a user wants to flag an article ', () => {
  it('should not be able to flag an article as inappropriate when no token', (done) => {
    chai.request(app)
      .post('/api/v1/articles/1')
      .send({
        flagId: 1,
      })
      .end((err, res) => {
        res.should.have.status(401);
        done();
      });
  });

  const payload = {
    id: 2,
    first_name: 'Patrick',
    last_name: 'Tunezerwane',
    email: 'tp3@gmail.com',
    password: '$2b$10$Atnw/KEDHvmcSdNTRWfMfOZIOOQFOIynwjiYqGGZx3xtemaF6NGe6',
    gender: 'Male',
    jobRole: 'Manager',
    department: 'ICT',
    address: 'Kigali',
    is_admin: false,
  };
  const token = jwt.sign(payload, process.env.JWT_KEY, { expiresIn: '365d' });

  it('should not be able to flag an article wich is not found', (done) => {
    chai.request(app)
      .post('/api/v1/articles/80')
      .set('x-auth-token', token)
      .send({
        flagId: 1,
      })
      .end((err, res) => {
        res.should.have.status(404);
        res.should.be.an('object');
        res.body.should.have.property('status').eql(404);
        res.body.should.have.property('error');
        done();
      });
  });
  it('should be able to flag an article', (done) => {
    chai.request(app)
      .post('/api/v1/articles/1')
      .set('x-auth-token', token)
      .send({
        flagId: 1,
      })
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.have.property('status').eql(200);
        res.body.should.have.property('message');
        done();
      });
  });
});
