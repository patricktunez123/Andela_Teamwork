const { describe, it } = require('mocha');
const chai = require('chai');
const http = require('chai-http');
const app = require('../../server/index');

chai.use(http);
chai.expect();

describe('When a user is signing up', () => {
  it('user should be able to signup', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send({
        first_name: 'Patrick',
        last_name: 'Tunezerwane',
        email: 'pat@gmail.com',
        password: 'kgl123',
        gender: 'Male',
        jobRole: 'Manager',
        department: 'ICT',
        address: 'Kigali',
        is_admin: false,
      })
      .end((err, res) => {
        res.expect.have.status(201);
        res.expect.be.an('object');
        res.body.expect.have.property('status').eql(201);
        res.body.expect.have.property('message');
        res.body.expect.have.property('data');
        done();
      });
  });


  it('use should not be saved if there is a missing field', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send({
        first_name: 'Patrick2',
        last_name: 'Tunezerwane2',
        email: 'pat2@gmail.com',
        password: 'kgl2',
        gender: 'Male',
        jobRole: 'Teacher',
        department: 'ET',
        address: 'Rwanda',
        is_admin: false,
      })
      .end((err, res) => {
        res.expect.have.status(400);
        res.expect.be.an('object');
        res.expect.have.property('status').eql(400);
        res.expect.have.property('error');
        done();
      });
  });

  it('should not be saved if an email has been already used', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send({
        first_name: 'Patrick2',
        last_name: 'Tunezerwane2',
        email: 'pat2@gmail.com',
        password: 'kgl2',
        gender: 'Male',
        jobRole: 'Teacher',
        department: 'Accountancy',
        address: 'Kenya',
        is_admin: false,
      }).end((err, res) => {
        res.expect.have.status(409);
        res.expect.be.an('object');
        res.expect.have.property('status').eql(409);
        res.expect.have.property('error');
        done();
      });
  });
});
