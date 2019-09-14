const chai = require('chai');
const { describe, it } = require('mocha');
const http = require('chai-http');
const app = require('../../server/index');

chai.use(http);
chai.expect();

describe('When a user is trying to login ', () => {
  it('should be able to login', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signin')
      .send({
        email: 'patrick@gmail.com',
        password: 'kgl123',
      })
      .end((err, res) => {
        res.expect.have.status(200);
        res.expect.be.an('object');
        res.expect.have.property('status').eql(200);
        res.body.expect.have.status(200);
        res.body.expect.have.property('message');
        res.body.expect.have.property('data');
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
        res.expect.have.status(404);
        res.expect.be.an('object');
        res.expect.have.property('status').eql(404);
        res.body.expect.have.property('error');
        res.body.expect.have.status(404);
        done();
      });
  });

  it('should not be able to login if password is not correct', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signin')
      .send({
        email: 'patrick@gmail.com',
        password: 'kgl123',
      })
      .end((err, res) => {
        res.expect.have.status(404);
        res.expect.be.an('object');
        res.expect.have.property('status').eql(404);
        res.body.expect.have.property('error');
        res.body.expect.have.status(404);
        done();
      });
  });

  it('should not be able to login if one of email or password is incorrect ', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signin')
      .send({
        email: 'patrick@gmail.com',
        password: 'kg12',
      })
      .end((err, res) => {
        res.expect.have.status(404);
        res.expect.be.an('object');
        res.expect.have.property('status').eql(404);
        res.body.expect.have.property('error');
        res.body.expect.have.status(404);
        done();
      });
  });
});
