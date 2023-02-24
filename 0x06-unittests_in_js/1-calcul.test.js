/**
 * Test calculateNumber function
 */
const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe("calculateNumber", function() {
  describe('SUM', function() {
    it("should return 0 with 0.1 and 0.4", function() {
      assert.equal(calculateNumber('SUM', 0.1, 0.4), 0);
    });
    it("should return 1 with 0.1 and 0.5", function() {
      assert.equal(calculateNumber('SUM', 0.1, 0.5), 1);
    });
    it("should return 4 with 1 and 3", function() {
      assert.equal(calculateNumber('SUM', 1, 3), 4);
    });
    it("should return 5 with 1 and 3.7", function() {
      assert.equal(calculateNumber('SUM', 1, 3.7), 5);
    });
    it("should return 5 with 1.4 and 3.7", function() {
      assert.equal(calculateNumber('SUM', 1.4, 3.7), 5);
    });
    it("should return 6 with 1.5 and 3.7", function() {
      assert.equal(calculateNumber('SUM', 1.5, 3.7), 6);
    });
    it("should return 0 with -0.1 and 0.4", function() {
      assert.equal(calculateNumber('SUM', -0.1, 0.4), 0);
    });
    it("should return 0 with -0.1 and -0.4", function() {
      assert.equal(calculateNumber('SUM', -0.1, -0.4), 0);
    });
    it("should return 0 with -0.1 and -0.5", function() {
      assert.equal(calculateNumber('SUM', -0.1, -0.5), 0);
    });
    it("should return -1 with -1.5 and -0.5", function() {
      assert.equal(calculateNumber('SUM', -1.5, -0.5), -1);
    });
    it("should return -3 with -1.6 and -0.6", function() {
      assert.equal(calculateNumber('SUM', -1.6, -0.6), -3);
    });
    it("should return 0 with -1.1 and 1.1", function() {
      assert.equal(calculateNumber('SUM', -1.1, 1.1), 0);
    });
    it("should return -4 with -1 and -3", function() {
      assert.equal(calculateNumber('SUM', -1, -3), -4);
    });
    it("should return 3 with -1 and 3.7", function() {
      assert.equal(calculateNumber('SUM', -1, 3.7), 3);
    });
    it("should return -3 with 1 and -3.7", function() {
      assert.equal(calculateNumber('SUM', 1, -3.7), -3);
    });
    it("should return -5 with -1 and -3.7", function() {
      assert.equal(calculateNumber('SUM', -1, -3.7), -5);
    });
    it("should return -5 with -1.4 and -3.7", function() {
      assert.equal(calculateNumber('SUM', -1.4, -3.7), -5);
    });
    it("should return 3 with -1.4 and 3.7", function() {
      assert.equal(calculateNumber('SUM', -1.4, 3.7), 3);
    });
    it("should return -3 with -1.4 and -3.7", function() {
      assert.equal(calculateNumber('SUM', 1.4, -3.7), -3);
    });
    it("should return -5 with -1.5 and -3.7", function() {
      assert.equal(calculateNumber('SUM', -1.5, -3.7), -5);
    });
    it("should return -2 with 1.5 and -3.7", function() {
      assert.equal(calculateNumber('SUM', 1.5, -3.7), -2);
    });
    it("should return 3 with -1.5 and 3.7", function() {
      assert.equal(calculateNumber('SUM', -1.5, 3.7), 3);
    });
    it("should return -6 with -1.6 and -3.7", function() {
      assert.equal(calculateNumber('SUM', -1.6, -3.7), -6);
    });
    it("should return 2 with -1.6 and 3.7", function() {
      assert.equal(calculateNumber('SUM', -1.6, 3.7), 2);
    });
    it("should return 2 with -1.6 and 3.7", function() {
      assert.equal(calculateNumber('SUM', -1.6, 3.7), 2);
    });
  });
  describe('SUBTRACT', function() {
    it("should return 0 with 0.1 and 0.4", function() {
      assert.equal(calculateNumber('SUBTRACT', 0.1, 0.4), 0);
    });
    it("should return -1 with 0.1 and 0.5", function() {
      assert.equal(calculateNumber('SUBTRACT', 0.1, 0.5), -1);
    });
    it("should return -2 with 1 and 3", function() {
      assert.equal(calculateNumber('SUBTRACT', 1, 3), -2);
    });
    it("should return -3 with 1 and 3.7", function() {
      assert.equal(calculateNumber('SUBTRACT', 1, 3.7), -3);
    });
    it("should return -3 with 1.4 and 3.7", function() {
      assert.equal(calculateNumber('SUBTRACT', 1.4, 3.7), -3);
    });
    it("should return -2 with 1.5 and 3.7", function() {
      assert.equal(calculateNumber('SUBTRACT', 1.5, 3.7), -2);
    });
    it("should return 0 with -0.1 and 0.4", function() {
      assert.equal(calculateNumber('SUBTRACT', -0.1, 0.4), 0);
    });
    it("should return 0 with -0.1 and -0.4", function() {
      assert.equal(calculateNumber('SUBTRACT', -0.1, -0.4), 0);
    });
    it("should return 0 with -0.1 and -0.5", function() {
      assert.equal(calculateNumber('SUBTRACT', -0.1, -0.5), 0);
    });
    it("should return -1 with -1.5 and -0.5", function() {
      assert.equal(calculateNumber('SUBTRACT', -1.5, -0.5), -1);
    });
    it("should return -1 with -1.6 and -0.6", function() {
      assert.equal(calculateNumber('SUBTRACT', -1.6, -0.6), -1);
    });
    it("should return -2 with -1.1 and 1.1", function() {
      assert.equal(calculateNumber('SUBTRACT', -1.1, 1.1), -2);
    });
    it("should return 2 with -1 and -3", function() {
      assert.equal(calculateNumber('SUBTRACT', -1, -3), 2);
    });
    it("should return -5 with -1 and 3.7", function() {
      assert.equal(calculateNumber('SUBTRACT', -1, 3.7), -5);
    });
    it("should return -5 with 1 and -3.7", function() {
      assert.equal(calculateNumber('SUBTRACT', 1, -3.7), 5);
    });
    it("should return 3 with -1 and -3.7", function() {
      assert.equal(calculateNumber('SUBTRACT', -1, -3.7), 3);
    });
    it("should return 3 with -1.4 and -3.7", function() {
      assert.equal(calculateNumber('SUBTRACT', -1.4, -3.7), 3);
    });
    it("should return -5 with -1.4 and 3.7", function() {
      assert.equal(calculateNumber('SUBTRACT', -1.4, 3.7), -5);
    });
    it("should return 5 with -1.4 and -3.7", function() {
      assert.equal(calculateNumber('SUBTRACT', 1.4, -3.7), 5);
    });
    it("should return 3 with -1.5 and -3.7", function() {
      assert.equal(calculateNumber('SUBTRACT', -1.5, -3.7), 3);
    });
    it("should return 6 with 1.5 and -3.7", function() {
      assert.equal(calculateNumber('SUBTRACT', 1.5, -3.7), 6);
    });
    it("should return -5 with -1.5 and 3.7", function() {
      assert.equal(calculateNumber('SUBTRACT', -1.5, 3.7), -5);
    });
    it("should return 2 with -1.6 and -3.7", function() {
      assert.equal(calculateNumber('SUBTRACT', -1.6, -3.7), 2);
    });
    it("should return -6 with -1.6 and 3.7", function() {
      assert.equal(calculateNumber('SUBTRACT', -1.6, 3.7), -6);
    });
  });
  describe('DIVIDE', function() {
    it("should return Error with 0.1 and 0.4", function() {
      assert.equal(calculateNumber('DIVIDE', 0.1, 0.4), "Error");
    });
    it("should return 0 with 0.1 and 0.5", function() {
      assert.equal(calculateNumber('DIVIDE', 0.1, 0.5), 0);
    });
    it("should return 0.25 with 1 and 3.7", function() {
      assert.equal(calculateNumber('DIVIDE', 1, 3.7), 0.25);
    });
    it("should return 0.25 with 1.4 and 3.7", function() {
      assert.equal(calculateNumber('DIVIDE', 1.4, 3.7), 0.25);
    });
    it("should return 0.5 with 1.5 and 3.7", function() {
      assert.equal(calculateNumber('DIVIDE', 1.5, 3.7), 0.5);
    });
    it("should return Error with -0.1 and 0.4", function() {
      assert.equal(calculateNumber('DIVIDE', -0.1, 0.4), "Error");
    });
    it("should return Error with -0.1 and -0.4", function() {
      assert.equal(calculateNumber('DIVIDE', -0.1, -0.4), "Error");
    });
    it("should return Error with -0.1 and -0.5", function() {
      assert.equal(calculateNumber('DIVIDE', -0.1, -0.5), "Error");
    });
    it("should return Error with -1.5 and -0.5", function() {
      assert.equal(calculateNumber('DIVIDE', -1.5, -0.5), "Error");
    });
    it("should return 2 with -1.6 and -0.6", function() {
      assert.equal(calculateNumber('DIVIDE', -1.6, -0.6), 2);
    });
    it("should return -1 with -1.1 and 1.1", function() {
      assert.equal(calculateNumber('DIVIDE', -1.1, 1.1), -1);
    });
    it("should return -0.25 with -1 and 3.7", function() {
      assert.equal(calculateNumber('DIVIDE', -1, 3.7), -0.25);
    });
    it("should return -0.25 with 1 and -3.7", function() {
      assert.equal(calculateNumber('DIVIDE', 1, -3.7), -0.25);
    });
    it("should return 0.25 with -1 and -3.7", function() {
      assert.equal(calculateNumber('DIVIDE', -1, -3.7), 0.25);
    });
    it("should return 0.25 with -1.4 and -3.7", function() {
      assert.equal(calculateNumber('DIVIDE', -1.4, -3.7), 0.25);
    });
    it("should return 0.25 with -1.5 and -3.7", function() {
      assert.equal(calculateNumber('DIVIDE', -1.5, -3.7), 0.25);
    });
    it("should return -0.5 with 1.5 and -3.7", function() {
      assert.equal(calculateNumber('DIVIDE', 1.5, -3.7), -0.5);
    });
    it("should return 0.5 with -1.6 and -3.7", function() {
      assert.equal(calculateNumber('DIVIDE', -1.6, -3.7), 0.5);
    });
    it("should return -0.5 with -1.6 and 3.7", function() {
      assert.equal(calculateNumber('DIVIDE', -1.6, 3.7), -0.5);
    });
    it("should return -2 with 3.7 and 1.6", function() {
      assert.equal(calculateNumber('DIVIDE', 3.7, -1.6), -2);
    });
  });
});
