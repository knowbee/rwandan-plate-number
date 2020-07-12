const {
  isValid
} = require("../src");
const chai = require("chai");
const expect = chai.expect;

describe("rwandan plate number validator", async () => {
  describe("valid plate number", () => {
    it("should return true", function () {
      expect(isValid("RNP012P")).to.equal(true);
    });
  });
  describe("special plate number", () => {
    it("should return true", function () {
      expect(isValid("GP012K")).to.equal(true);
    });
  });
});