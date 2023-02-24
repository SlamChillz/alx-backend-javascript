/**
 * Test calculateNumber function
 */
const chai = require("chai");
const expect = chai.expect;
const calculateNumber = require('./2-calcul_chai');

describe("calculateNumber", function() {
  describe('SUM', function() {
    it("should return 0 with 0.1 and 0.4", function() {
      expect(calculateNumber('SUM', 0.1, 0.4)).to.be.equal(0);
    });
    it("should return 1 with 0.1 and 0.5", function() {
      expect(calculateNumber('SUM', 0.1, 0.5)).to.be.equal(1);
    });
    it("should return 4 with 1 and 3", function() {
      expect(calculateNumber('SUM', 1, 3)).to.be.equal(4);
    });
    it("should return 5 with 1 and 3.7", function() {
      expect(calculateNumber('SUM', 1, 3.7)).to.be.equal(5);
    });
    it("should return 5 with 1.4 and 3.7", function() {
      expect(calculateNumber('SUM', 1.4, 3.7)).to.be.equal(5);
    });
    it("should return 6 with 1.5 and 3.7", function() {
      expect(calculateNumber('SUM', 1.5, 3.7)).to.be.equal(6);
    });
    it("should return 0 with -0.1 and 0.4", function() {
      expect(calculateNumber('SUM', -0.1, 0.4)).to.be.equal(0);
    });
    it("should return 0 with -0.1 and -0.4", function() {
      expect(calculateNumber('SUM', -0.1, -0.4)).to.be.equal(0);
    });
    it("should return 0 with -0.1 and -0.5", function() {
      expect(calculateNumber('SUM', -0.1, -0.5)).to.be.equal(0);
    });
    it("should return -1 with -1.5 and -0.5", function() {
      expect(calculateNumber('SUM', -1.5, -0.5)).to.be.equal(-1);
    });
    it("should return -3 with -1.6 and -0.6", function() {
      expect(calculateNumber('SUM', -1.6, -0.6)).to.be.equal(-3);
    });
    it("should return 0 with -1.1 and 1.1", function() {
      expect(calculateNumber('SUM', -1.1, 1.1)).to.be.equal(0);
    });
    it("should return -4 with -1 and -3", function() {
      expect(calculateNumber('SUM', -1, -3)).to.be.equal(-4);
    });
    it("should return 3 with -1 and 3.7", function() {
      expect(calculateNumber('SUM', -1, 3.7)).to.be.equal(3);
    });
    it("should return -3 with 1 and -3.7", function() {
      expect(calculateNumber('SUM', 1, -3.7)).to.be.equal(-3);
    });
    it("should return -5 with -1 and -3.7", function() {
      expect(calculateNumber('SUM', -1, -3.7)).to.be.equal(-5);
    });
    it("should return -5 with -1.4 and -3.7", function() {
      expect(calculateNumber('SUM', -1.4, -3.7)).to.be.equal(-5);
    });
    it("should return 3 with -1.4 and 3.7", function() {
      expect(calculateNumber('SUM', -1.4, 3.7)).to.be.equal(3);
    });
    it("should return -3 with -1.4 and -3.7", function() {
      expect(calculateNumber('SUM', 1.4, -3.7)).to.be.equal(-3);
    });
    it("should return -5 with -1.5 and -3.7", function() {
      expect(calculateNumber('SUM', -1.5, -3.7)).to.be.equal(-5);
    });
    it("should return -2 with 1.5 and -3.7", function() {
      expect(calculateNumber('SUM', 1.5, -3.7)).to.be.equal(-2);
    });
    it("should return 3 with -1.5 and 3.7", function() {
      expect(calculateNumber('SUM', -1.5, 3.7)).to.be.equal(3);
    });
    it("should return -6 with -1.6 and -3.7", function() {
      expect(calculateNumber('SUM', -1.6, -3.7)).to.be.equal(-6);
    });
    it("should return 2 with -1.6 and 3.7", function() {
      expect(calculateNumber('SUM', -1.6, 3.7)).to.be.equal(2);
    });
    it("should return 2 with -1.6 and 3.7", function() {
      expect(calculateNumber('SUM', -1.6, 3.7)).to.be.equal(2);
    });
  });
  describe('SUBTRACT', function() {
    it("should return 0 with 0.1 and 0.4", function() {
      expect(calculateNumber('SUBTRACT', 0.1, 0.4)).to.be.equal(0);
    });
    it("should return -1 with 0.1 and 0.5", function() {
      expect(calculateNumber('SUBTRACT', 0.1, 0.5)).to.be.equal(-1);
    });
    it("should return -2 with 1 and 3", function() {
      expect(calculateNumber('SUBTRACT', 1, 3)).to.be.equal(-2);
    });
    it("should return -3 with 1 and 3.7", function() {
      expect(calculateNumber('SUBTRACT', 1, 3.7)).to.be.equal(-3);
    });
    it("should return -3 with 1.4 and 3.7", function() {
      expect(calculateNumber('SUBTRACT', 1.4, 3.7)).to.be.equal(-3);
    });
    it("should return -2 with 1.5 and 3.7", function() {
      expect(calculateNumber('SUBTRACT', 1.5, 3.7)).to.be.equal(-2);
    });
    it("should return 0 with -0.1 and 0.4", function() {
      expect(calculateNumber('SUBTRACT', -0.1, 0.4)).to.be.equal(0);
    });
    it("should return 0 with -0.1 and -0.4", function() {
      expect(calculateNumber('SUBTRACT', -0.1, -0.4)).to.be.equal(0);
    });
    it("should return 0 with -0.1 and -0.5", function() {
      expect(calculateNumber('SUBTRACT', -0.1, -0.5)).to.be.equal(0);
    });
    it("should return -1 with -1.5 and -0.5", function() {
      expect(calculateNumber('SUBTRACT', -1.5, -0.5)).to.be.equal(-1);
    });
    it("should return -1 with -1.6 and -0.6", function() {
      expect(calculateNumber('SUBTRACT', -1.6, -0.6)).to.be.equal(-1);
    });
    it("should return -2 with -1.1 and 1.1", function() {
      expect(calculateNumber('SUBTRACT', -1.1, 1.1)).to.be.equal(-2);
    });
    it("should return 2 with -1 and -3", function() {
      expect(calculateNumber('SUBTRACT', -1, -3)).to.be.equal(2);
    });
    it("should return -5 with -1 and 3.7", function() {
      expect(calculateNumber('SUBTRACT', -1, 3.7)).to.be.equal(-5);
    });
    it("should return -5 with 1 and -3.7", function() {
      expect(calculateNumber('SUBTRACT', 1, -3.7)).to.be.equal(5);
    });
    it("should return 3 with -1 and -3.7", function() {
      expect(calculateNumber('SUBTRACT', -1, -3.7)).to.be.equal(3);
    });
    it("should return 3 with -1.4 and -3.7", function() {
      expect(calculateNumber('SUBTRACT', -1.4, -3.7)).to.be.equal(3);
    });
    it("should return -5 with -1.4 and 3.7", function() {
      expect(calculateNumber('SUBTRACT', -1.4, 3.7)).to.be.equal(-5);
    });
    it("should return 5 with -1.4 and -3.7", function() {
      expect(calculateNumber('SUBTRACT', 1.4, -3.7)).to.be.equal(5);
    });
    it("should return 3 with -1.5 and -3.7", function() {
      expect(calculateNumber('SUBTRACT', -1.5, -3.7)).to.be.equal(3);
    });
    it("should return 6 with 1.5 and -3.7", function() {
      expect(calculateNumber('SUBTRACT', 1.5, -3.7)).to.be.equal(6);
    });
    it("should return -5 with -1.5 and 3.7", function() {
      expect(calculateNumber('SUBTRACT', -1.5, 3.7)).to.be.equal(-5);
    });
    it("should return 2 with -1.6 and -3.7", function() {
      expect(calculateNumber('SUBTRACT', -1.6, -3.7)).to.be.equal(2);
    });
    it("should return -6 with -1.6 and 3.7", function() {
      expect(calculateNumber('SUBTRACT', -1.6, 3.7)).to.be.equal(-6);
    });
  });
  describe('DIVIDE', function() {
    it("should return Error with 0.1 and 0.4", function() {
      expect(calculateNumber('DIVIDE', 0.1, 0.4)).to.be.equal("Error");
    });
    it("should return 0 with 0.1 and 0.5", function() {
      expect(calculateNumber('DIVIDE', 0.1, 0.5)).to.be.equal(0);
    });
    it("should return 0.25 with 1 and 3.7", function() {
      expect(calculateNumber('DIVIDE', 1, 3.7)).to.be.equal(0.25);
    });
    it("should return 0.25 with 1.4 and 3.7", function() {
      expect(calculateNumber('DIVIDE', 1.4, 3.7)).to.be.equal(0.25);
    });
    it("should return 0.5 with 1.5 and 3.7", function() {
      expect(calculateNumber('DIVIDE', 1.5, 3.7)).to.be.equal(0.5);
    });
    it("should return Error with -0.1 and 0.4", function() {
      expect(calculateNumber('DIVIDE', -0.1, 0.4)).to.be.equal("Error");
    });
    it("should return Error with -0.1 and -0.4", function() {
      expect(calculateNumber('DIVIDE', -0.1, -0.4)).to.be.equal("Error");
    });
    it("should return Error with -0.1 and -0.5", function() {
      expect(calculateNumber('DIVIDE', -0.1, -0.5)).to.be.equal("Error");
    });
    it("should return Error with -1.5 and -0.5", function() {
      expect(calculateNumber('DIVIDE', -1.5, -0.5)).to.be.equal("Error");
    });
    it("should return 2 with -1.6 and -0.6", function() {
      expect(calculateNumber('DIVIDE', -1.6, -0.6)).to.be.equal(2);
    });
    it("should return -1 with -1.1 and 1.1", function() {
      expect(calculateNumber('DIVIDE', -1.1, 1.1)).to.be.equal(-1);
    });
    it("should return -0.25 with -1 and 3.7", function() {
      expect(calculateNumber('DIVIDE', -1, 3.7)).to.be.equal(-0.25);
    });
    it("should return -0.25 with 1 and -3.7", function() {
      expect(calculateNumber('DIVIDE', 1, -3.7)).to.be.equal(-0.25);
    });
    it("should return 0.25 with -1 and -3.7", function() {
      expect(calculateNumber('DIVIDE', -1, -3.7)).to.be.equal(0.25);
    });
    it("should return 0.25 with -1.4 and -3.7", function() {
      expect(calculateNumber('DIVIDE', -1.4, -3.7)).to.be.equal(.25);
    });
    it("should return 0.25 with -1.5 and -3.7", function() {
      expect(calculateNumber('DIVIDE', -1.5, -3.7)).to.be.equal(.25);
    });
    it("should return -0.5 with 1.5 and -3.7", function() {
      expect(calculateNumber('DIVIDE', 1.5, -3.7)).to.be.equal(-0.5);
    });
    it("should return 0.5 with -1.6 and -3.7", function() {
      expect(calculateNumber('DIVIDE', -1.6, -3.7)).to.be.equal(0.5);
    });
    it("should return -0.5 with -1.6 and 3.7", function() {
      expect(calculateNumber('DIVIDE', -1.6, 3.7)).to.be.equal(-0.5);
    });
    it("should return -2 with 3.7 and 1.6", function() {
      expect(calculateNumber('DIVIDE', 3.7, -1.6)).to.be.equal(-2);
    });
  });
});
