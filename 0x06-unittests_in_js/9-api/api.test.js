const request = require('request');
const chai = require('chai');

const { expect } = chai;

describe('Index page', () => {
  it('response', (done) => {
    try {
      request('http://localhost:7865/', (error, response, body) => {
        if (error) throw error;
        expect(body).to.equal('Welcome to the payment system');
        expect(response.statusCode).to.equal(200);
        done();
      });
    } catch (error) {
      done(error);
    }
  });
  describe('cart', () => {
    it('response', (done) => {
      try {
        request('http://localhost:7865/cart/7', (error, response, body) => {
          if (error) throw error;
          expect(body).to.equal('Payment methods for cart 7');
          expect(response.statusCode).to.equal(200);
          done();
        });
      } catch (error) {
        done(error);
      }
    });
    it('not number', (done) => {
      try {
        request('http://localhost:7865/cart/devops', (error, response) => {
          if (error) throw error;
          expect(response.statusCode).to.equal(404);
          done();
        });
      } catch (error) {
        done(error);
      }
    });
  });
});
