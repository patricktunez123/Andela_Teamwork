import ENV from 'dotenv';
import chai from 'chai';
import { describe, it } from 'mocha';
import http from 'chai-http';
import jwt from 'jsonwebtoken';
import mockData from '../mockData/mockData';
import app from '../../server/index';

ENV.config();
chai.use(http);
chai.should();

describe('When a user is creating an article ', () => {
  it('should not be able to post an article if a token was not provided', (done) => {
    chai.request(app)
      .post('/api/v1/articles')
      .send({
        title: 'Today is a great day',
        article: 'Hello my best friends ! today i just want share with you this nice quote!:Self-belief and hard work will always earn you success.',
      })
      .end((err, res) => {
        res.should.have.status(401);
        done();
      });
  });
  const token = jwt.sign(mockData, process.env.JWT_KEY, { expiresIn: '365d' });

  it('should  be able to post if a token is given ', (done) => {
    chai.request(app)
      .post('/api/v1/articles')
      .set('x-auth-token', token)
      .send({
        title: 'Today Is a cool day for sure',
        article: 'Hello my best friends ! today i just want share with you this nice quote!:Self-belief and hard work will always earn you success.',
      })
      .end((err, res) => {
        res.should.have.status(201);
        res.should.be.an('object');
        res.body.should.have.property('status').eql(201);
        res.body.should.have.property('message');
        res.body.should.have.property('data');
        done();
      });
  });

  it('should not be able to post an article if there is an error in inputs', (done) => {
    chai.request(app)
      .post('/api/v1/articles')
      .set('x-auth-token', token)
      .send({
        title: '',
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
});
