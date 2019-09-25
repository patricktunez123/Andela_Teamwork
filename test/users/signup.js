/* eslint-disable linebreak-style */
const { describe, it } = require('mocha');
const chai = require('chai');
const http = require('chai-http');
const app = require('../../server/index');

chai.use(http);
chai.should();

describe('When a user is signing up', () => {
  it('user should be able to signup', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send({
        first_name: 'Patrick',
        last_name: 'Tunezerwane',
        email: 'tp1@gmail.com',
        password: 'kgl12345',
        gender: 'Male',
        jobRole: 'Manager',
        department: 'ICT',
        address: 'Kigali',
        is_admin: false,
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


  it('use should not be saved if there is a missing field', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send({
        first_name: '',
        last_name: 'Tunezerwane',
        email: 'tp1@gmail.com',
        password: 'kgl12345',
        gender: 'Male',
        jobRole: 'Manager',
        department: 'ICT',
        address: 'Kigali',
        is_admin: false,
      })
      .end((err, res) => {
        res.should.have.status(400);
        res.should.be.an('object');
        res.should.have.property('status').eql(400);
        res.should.have.property('error');
        done();
      });
  });

  it('should not be saved if an email has been already used', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send({
        first_name: 'Patrick',
        last_name: 'Tunezerwane',
        email: 'tp@gmail.com',
        password: 'kgl12345',
        gender: 'Male',
        jobRole: 'Manager',
        department: 'ICT',
        address: 'Kigali',
        is_admin: false,
      }).end((err, res) => {
        res.should.have.status(400);
        res.should.be.an('object');
        res.should.have.property('status').eql(400);
        res.should.have.property('error');
        done();
      });
  });
});
