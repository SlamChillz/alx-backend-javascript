/**
 * Test that payment called Utils.calculateNumber
 */
const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const Utils = require('./utils');
const { sendPaymentRequestToApi } = require('./3-payment');

describe('sendPaymentRequestToAp', function() {
  beforeEach(function() {
    sinon.spy(Utils, 'calculateNumber');
  })
  afterEach(function() {
    sinon.restore();
  })
  it("validate the usage of the `Utils.calculateNumber` function", function() {
    sendPaymentRequestToApi(100, 20);
    // Check it is called
    expect(Utils.calculateNumber.called).to.be.true;
    // Check it is called once
    expect(Utils.calculateNumber.calledOnce).to.be.true;
    // Check it first argument
    expect(Utils.calculateNumber.args[0][0]).to.equal("SUM");
    // Check it second argument
    expect(Utils.calculateNumber.args[0][1]).to.equal(100);
    // Check it third argument
    expect(Utils.calculateNumber.args[0][2]).to.equal(20);
  });
});
