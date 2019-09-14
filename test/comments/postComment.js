/* eslint-disable linebreak-style */
const config = require('config');
const chai = require('chai');
const { describe, it } = require('mocha');
const http = require('chai-http');
const jwt = require('jsonwebtoken');
const app = require('../../server/index');

chai.use(http);
chai.expect();

describe('When a user is posting a comment ', () => {
  it('should not be able to post a comment if a token was not provided', (done) => {
    chai.request(app)
      .post('/api/v1/articles/1/comments')
      .send({
        comment: 'This is my comment on this post',
      })
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
  };
  const token = jwt.sign(payload, config.get('jwtPrivateKey'), { expiresIn: '1d' });

  it('should  be able to post if a token is given ', (done) => {
    chai.request(app)
      .post('/api/v1/articles/1/comments')
      .set('x-auth-token', token)
      .send({
        comment: 'This is my comment on this post',
      })
      .end((err, res) => {
        res.expect.have.status(201);
        res.expect.be.an('object');
        res.body.expect.have.property('status').eql(201);
        res.body.expect.have.property('message');
        res.body.expect.have.property('data');
        done();
      });
  });

  it('should not be able to post a comment if there is an error in inputs', (done) => {
    chai.request(app)
      .post('/api/v1/articles/1/comments')
      .set('x-auth-token', token)
      .send({
        comment: 'This is my comment on this post',
      })
      .end((err, res) => {
        res.expect.have.status(400);
        res.expect.be.an('object');
        res.body.expect.have.property('status').eql(400);
        res.body.expect.have.property('error');
        done();
      });
  });

  it('should not be able to post a comment if article not found', (done) => {
    chai.request(app)
      .post('/api/v1/articles/80/comments')
      .set('x-auth-token', token)
      .send({
        comment: 'This is my comment on this post',
      })
      .end((err, res) => {
        res.expect.have.status(404);
        res.expect.be.an('object');
        res.body.expect.have.property('status').eql(404);
        res.body.expect.have.property('error');
        done();
      });
  });
});
