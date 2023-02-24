/**
 * Test that payment called Utils.calculateNumber
 */
const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToAp', function() {
  it("validate the usage of the `Utils.calculateNumber` function", function() {
    const calculate = sinon.spy(Utils, 'calculateNumber');
    sendPaymentRequestToApi(100, 20);
    // Check it is called
    expect(calculate.called).to.be.true;
    // Check it is called once
    expect(calculate.calledOnce).to.be.true;
    // Check call count
    expect(calculate.callCount).to.be.equal(1);
    // Check it first argument
    expect(calculate.firstCall.args[0]).to.equal("SUM");
    // Check params
    expect(calculate.calledWith('SUM', 100, 20)).to.be.true;
    // restore spy
    calculate.restore();
  });
});
