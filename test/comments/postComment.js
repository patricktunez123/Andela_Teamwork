/* eslint-disable linebreak-style */
require('dotenv').config();
const chai = require('chai');
const { describe, it } = require('mocha');
const http = require('chai-http');
const jwt = require('jsonwebtoken');
const app = require('../../server/index');

chai.use(http);
chai.should();

describe('When a user is posting a comment ', () => {
  it('should not be able to post a comment if a token was not provided', (done) => {
    chai.request(app)
      .post('/api/v1/articles/1/comments')
      .send({
        comment: 'This is my comment on this post',
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
  const token = jwt.sign(payload, process.env.JWT_KEY, { expiresIn: '1d' });

  // it('should  be able to post if a token is given ', (done) => {
  //   chai.request(app)
  //     .post('/api/v1/articles/1/comments')
  //     .set('x-auth-token', token)
  //     .send({
  //       comment: 'This is my comment on this post',
  //     })
  //     .end((err, res) => {
  //       res.should.have.status(201);
  //       res.should.be.an('object');
  //       res.body.should.have.property('status').eql(201);
  //       res.body.should.have.property('message');
  //       res.body.should.have.property('data');
  //       done();
  //     });
  // });

  it('should not be able to post a comment if there is an error in inputs', (done) => {
    chai.request(app)
      .post('/api/v1/articles/1/comments')
      .set('x-auth-token', token)
      .send({
        comment: ' ',
      })
      .end((err, res) => {
        res.should.have.status(400);
        res.should.be.an('object');
        res.body.should.have.property('status').eql(400);
        res.body.should.have.property('error');
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
        res.should.have.status(404);
        res.should.be.an('object');
        res.body.should.have.property('status').eql(404);
        res.body.should.have.property('error');
        done();
      });
  });
});
