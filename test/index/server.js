/* eslint-disable no-trailing-spaces */
/* eslint-disable linebreak-style */
const { describe, it } = require('mocha');
const chai = require('chai');
// const http = require('chai-http');

// chai.use(http); 
const expect = chai.expect;

//  start app
const app = require('../../server/index');

describe('App', () => {
  it('Should exist', () => {
    expect(app).to.be.a('function');
  });
});
