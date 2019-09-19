/* eslint-disable linebreak-style */
require('dotenv').config();
const chai = require('chai');
const { describe, it } = require('mocha');
const http = require('chai-http');
const jwt = require('jsonwebtoken');
const app = require('../../server/index');

chai.use(http);
chai.should();

describe('when a user is trying to update an article ', () => {
  it('should not be able to update if no token provided', (done) => {
    chai.request(app)
      .patch('/api/v1/articles/1')
      .send({
        title: 'Today',
        article: 'Hello my best friends ! today i just want share with you this nice quote!:Self-belief and hard work will always earn you success.',
      })
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
  const token = jwt.sign(payload, process.env.JWT_KEY, { expiresIn: '365d' });

  it('should not be able to update if there is an error in inputs', (done) => {
    chai.request(app)
      .patch('/api/v1/articles/4')
      .set('x-auth-token', token)
      .send({
        title: ' ',
        article: 'Hello my best friends ! today i just want share with you this nice quote!:Self-belief and hard work will always earn you success.',
      })
      .end((err, res) => {
        res.should.have.status(400);
        res.should.be.an('object');
        res.body.should.have.property('status').eql(400);
        res.body.should.have.property('error');
        done();
      });
  });


  it('should not be able to update if an article is not available', (done) => {
    chai.request(app)
      .patch('/api/v1/articles/80')
      .set('x-auth-token', token)
      .send({
        title: 'Today',
        article: 'Hello my best friends ! today i just want share with you this nice quote!:Self-belief and hard work will always earn you success.',
      })
      .end((err, res) => {
        res.should.have.status(404);
        res.should.be.an('object');
        res.body.should.have.property('status').eql(404);
        res.body.should.have.property('error');
        done();
      });
  });

  it('should  be able to update if an article is found and a request is requested by the article owner ', (done) => {
    chai.request(app)
      .patch('/api/v1/articles/1')
      .set('x-auth-token', token)
      .send({
        title: 'Today',
        article: 'Hello my best friends ! today i just want share with you this nice quote!:Self-belief and hard work will always earn you success.',
      })
      .end((err, res) => {
        res.should.have.status(200);
        res.should.be.an('object');
        res.body.should.have.property('status').eql(200);
        res.body.should.have.property('message');
        res.body.should.have.property('data');
        done();
      });
  });

  // it('should not be able to update if an article is found but the request is not from an article owner', (done) => {
  //   chai.request(app)
  //     .patch('/api/v1/articles/1')
  //     .set('x-auth-token', token)
  //     .send({
  //       title: 'Today',
  //       article: 'Hello my best friends ! today i just want share with you this nice quote!:Self-belief and hard work will always earn you success.',
  //     })
  //     .end((err, res) => {
  //       res.should.have.status(403);
  //       res.should.be.an('object');
  //       res.body.should.have.property('status').eql(403);
  //       res.body.should.have.property('error');
  //       done();
  //     });
  // });
});
