/* eslint-disable linebreak-style */
require('dotenv').config();
const chai = require('chai');
const { describe, it } = require('mocha');
const http = require('chai-http');
const jwt = require('jsonwebtoken');
const app = require('../../server/index');

chai.use(http);
chai.should();

describe('When a user needs to delete an article ', () => {
  it('should not be able to delete an article when no token provided', (done) => {
    chai.request(app)
      .delete('/api/v1/articles/1')
      .send()
      .end((err, res) => {
        res.should.have.status(401);
        done();
      });
  });

  const Userpayload = {
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

  jwt.sign(Userpayload, token, { expiresIn: '1d' });

  it('should not be able to delete an article if not the owner', (done) => {
    chai.request(app)
      .delete('/api/v1/articles/2')
      .set('x-auth-token', token)
      .send()
      .end((err, res) => {
        res.should.have.status(403);
        res.should.be.an('object');
        res.body.should.have.property('status').eql(403);
        res.body.should.have.property('error');
        done();
      });
  });

  it('should not be able to delete an article if not found', (done) => {
    chai.request(app)
      .delete('/api/v1/articles/80')
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

  it('should be able to delete an article', (done) => {
    chai.request(app)
      .delete('/api/v1/articles/2')
      .set('x-auth-token', token)
      .send()
      .end((err, res) => {
        res.should.have.status(204);
        res.should.be.an('object');
        res.body.should.have.property('status').eql(204);
        res.body.should.have.property('message');
        done();
      });
  });
});
