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
  const token = jwt.sign(mockData, process.env.JWT_KEY, { expiresIn: '365d' });

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
