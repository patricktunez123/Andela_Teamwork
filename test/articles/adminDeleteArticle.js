/* eslint-disable linebreak-style */
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

describe('When admin needs to delete inappropriate article ', () => {
  it('should not be able to delete inappropriate article when no token provided', (done) => {
    chai.request(app)
      .delete('/api/v1/articles/1')
      .send()
      .end((err, res) => {
        res.should.have.status(401);
        done();
      });
  });

  const token = jwt.sign(mockData.userPayload, process.env.JWT_KEY, { expiresIn: '365d' });

  // it('should not be able to delete inappropriate article if not an admin', (done) => {
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

  const token2 = jwt.sign(mockData.adminPayload, process.env.JWT_KEY, { expiresIn: '365d' });

  // it('should be able to delete inappropriate article if you are the admin', (done) => {
  //   chai.request(app)
  //     .delete('/api/v1/articles/2')
  //     .set('x-auth-token', token2)
  //     .send()
  //     .end((err, res) => {
  //       res.should.have.status(200);
  //       res.should.be.an('object');
  //       res.body.should.have.property('status').eql(200);
  //       res.body.should.have.property('message');
  //       done();
  //     });
  // });
});
