/* eslint-disable linebreak-style */
const chai = require('chai');
const { describe, it } = require('mocha');
const http = require('chai-http');
const app = require('../../server/index');

chai.use(http);
chai.should();

describe('When a user is trying to login ', () => {
  it('should be able to login', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signin')
      .send({
        email: 'patrick@gmail.com',
        password: 'kgl123',
      })
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
      .send({
        email: 'pat@gmail.com',
        password: 'kgl1234',
      })
      .end((err, res) => {
        res.should.have.status(404);
        res.should.be.an('object');
        res.should.have.property('status').eql(404);
        res.body.should.have.property('error');
        res.body.should.have.status(404);
        done();
      });
  });

  it('should not be able to login if password is not correct', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signin')
      .send({
        email: 'patrick@gmail.com',
        password: 'kgl1234',
      })
      .end((err, res) => {
        res.should.have.status(404);
        res.should.be.an('object');
        res.should.have.property('status').eql(404);
        res.body.should.have.property('error');
        res.body.should.have.status(404);
        done();
      });
  });

  it('should not be able to login if one of email or password is incorrect ', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signin')
      .send({
        email: 'patrick10@gmail.com',
        password: 'kg12345',
      })
      .end((err, res) => {
        res.should.have.status(404);
        res.should.be.an('object');
        res.should.have.property('status').eql(404);
        res.body.should.have.property('error');
        res.body.should.have.status(404);
        done();
      });
  });
});
