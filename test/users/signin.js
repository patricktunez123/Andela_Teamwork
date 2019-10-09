import chai from 'chai';
import { describe, it } from 'mocha';
import http from 'chai-http';
import mockData from '../mockData/mockData';
import app from '../../server/index';

chai.use(http);
chai.should();

describe('When a user is trying to login ', () => {
  it('should be able to login', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signin')
      .send(mockData.ableToLogin)
      .end((err, res) => {
        res.should.have.status(200);
        res.should.be.an('object');
        res.should.have.property('status').eql(200);
        res.body.should.have.status(200);
        res.body.should.have.property('message');
        res.body.should.have.property('data');
        done();
      });
  });

  it('should not be able to login if the email is incorrect', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signin')
      .send(mockData.incEmail)
      .end((err, res) => {
        res.should.have.status(400);
        res.should.be.an('object');
        res.should.have.property('status').eql(400);
        res.body.should.have.property('error');
        res.body.should.have.status(400);
        done();
      });
  });

  it('should not be able to login if password is not correct', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signin')
      .send(mockData.incPassword)
      .end((err, res) => {
        res.should.have.status(400);
        res.should.be.an('object');
        res.should.have.property('status').eql(400);
        res.body.should.have.property('error');
        res.body.should.have.status(400);
        done();
      });
  });

  it('should not be able to login if one of email or password is incorrect ', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signin')
      .send(mockData.incEmailAndPwd)
      .end((err, res) => {
        res.should.have.status(400);
        res.should.be.an('object');
        res.should.have.property('status').eql(400);
        res.body.should.have.property('error');
        res.body.should.have.status(400);
        done();
      });
  });
});
