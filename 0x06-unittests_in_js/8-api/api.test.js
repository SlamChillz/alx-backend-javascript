const request = require('request');
const chai = require('chai');

const { expect } = chai;

describe('Index page', () => {
  it('response', (done) => {
    try {
      request('http://localhost:7865/', (err, res, body) => {
        if (err) throw err;
        expect(body).to.be.equal('Welcome to the payment system');
        expect(res.statusCode).to.be.equal(200);
        done();
      });
    } catch (err) {
      done(err);
    }
  });
});
