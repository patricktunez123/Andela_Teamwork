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

describe('When a user is posting a comment ', () => {
  it('should not be able to post a comment if a token was not provided', (done) => {
    chai.request(app)
      .post('/api/v1/articles/1/comments')
      .send(mockData.noTokenForCmt)
      .end((err, res) => {
        res.should.have.status(401);
        done();
      });
  });
  const token = jwt.sign(mockData, process.env.JWT_KEY, { expiresIn: '365d' });

  it('should not be able to post a comment if there is an error in inputs', (done) => {
    chai.request(app)
      .post('/api/v1/articles/1/comments')
      .set('x-auth-token', token)
      .send(mockData.errorInInputsCmt)
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
      .send(mockData.notFoundCmt)
      .end((err, res) => {
        res.should.have.status(404);
        res.should.be.an('object');
        res.body.should.have.property('status').eql(404);
        res.body.should.have.property('error');
        done();
      });
  });
});
