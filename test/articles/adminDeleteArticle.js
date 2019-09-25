/* eslint-disable linebreak-style */
require('dotenv').config();
const chai = require('chai');
const { describe, it } = require('mocha');
const http = require('chai-http');
const jwt = require('jsonwebtoken');
const app = require('../../server/index');

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

  const Userpayload = {
    id: 1,
    first_name: 'Patrick',
    last_name: 'Tunezerwane',
    email: 'pat@gmail.com',
    password: 'kgl123',
    gender: 'Male',
    jobRole: 'Manager',
    department: 'ICT',
    address: 'Kigali',
    is_admin: false,
  };

  const token = jwt.sign(Userpayload, process.env.JWT_KEY, { expiresIn: '365d' });

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


  const Adminpayload = {
    id: 1,
    first_name: 'tunez',
    last_name: 'pat',
    email: 'tunez@gmail.com',
    address: 'Kigali',
    is_admin: true,
  };

  const token2 = jwt.sign(Adminpayload, process.env.JWT_KEY, { expiresIn: '365d' });

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
