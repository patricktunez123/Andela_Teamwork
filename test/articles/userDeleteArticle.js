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
  const token = jwt.sign(mockData, process.env.JWT_KEY, { expiresIn: '365d' });

  // it('should not be able to delete an article if not the owner', (done) => {
  //   chai.request(app)
  //     .delete('/api/v1/articles/2')
  //     .set('x-auth-token', token)
  //     .send()
  //     .end((err, res) => {
  //       res.should.have.status(403);
  //       res.should.be.an('object');
  //       res.body.should.have.property('status').eql(403);
  //       res.body.should.have.property('error');
  //       done();
  //     });
  // });

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
      .delete('/api/v1/articles/1')
      .set('x-auth-token', token)
      .send()
      .end((err, res) => {
        res.should.have.status(200);
        res.should.be.an('object');
        res.body.should.have.property('status').eql(200);
        res.body.should.have.property('message');
        done();
      });
  });
});
