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
        request('http://localhost:7865/cart/12', (error, response, body) => {
          if (error) throw error;
          expect(body).to.equal('Payment methods for cart 12');
          expect(response.statusCode).to.equal(200);
          done();
        });
      } catch (error) {
        done(error);
      }
    });
    it('not number', (done) => {
      try {
        request('http://localhost:7865/cart/uber', (error, response) => {
          if (error) throw error;
          expect(response.statusCode).to.equal(404);
          done();
        });
      } catch (error) {
        done(error);
      }
    });
  });
  describe('available_payments', () => {
    it('response', (done) => {
      try {
        request('http://localhost:7865/available_payments', (error, response, body) => {
          if (error) throw error;
          expect(JSON.parse(body)).to.deep.equal({
            payment_methods: {
              credit_cards: true,
              paypal: false,
            },
          });
          expect(response.statusCode).to.equal(200);
          done();
        });
      } catch (error) {
        done(error);
      }
    });
  });
  describe('login', () => {
    it('response', (done) => {
      try {
        request.post({
          url: 'http://localhost:7865/login',
          json: { userName: 'Betty' },
        }, (error, response, body) => {
          if (error) throw error;
          expect(body).to.equal('Welcome Betty');
          expect(response.statusCode).to.equal(200);
          done();
        });
      } catch (error) {
        done(error);
      }
    });
  });
});
