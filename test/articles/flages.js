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

describe('When a user wants to flag an article ', () => {
  it('should not be able to flag an article as inappropriate when no token', (done) => {
    chai.request(app)
      .post('/api/v1/articles/1')
      .send(mockData.flaggedId)
      .end((err, res) => {
        res.should.have.status(401);
        done();
      });
  });
  const token = jwt.sign(mockData, process.env.JWT_KEY, { expiresIn: '365d' });

  it('should not be able to flag an article wich is not found', (done) => {
    chai.request(app)
      .post('/api/v1/articles/80')
      .set('x-auth-token', token)
      .send(mockData.flaggedId)
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
      .send(mockData.flaggedId)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.have.property('status').eql(200);
        res.body.should.have.property('message');
        done();
      });
  });
});
