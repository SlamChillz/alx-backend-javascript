/**
 * Test payment token
 */
const chai = require('chai');
const expect = chai.expect;

const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', function() {
  it("should return a data object", function(done) {
    getPaymentTokenFromAPI(true)
      .then((res) => {
        console.log(res)
        expect(res.data).to.be.equal('Successful response from the API');
        done();
      })
      .catch((err) => done(err));
  });
});
