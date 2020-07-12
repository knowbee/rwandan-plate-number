const {
  isValid
} = require("../src");
const chai = require("chai");
const expect = chai.expect;

describe("rwandan valid plate number", async () => {
  describe("special plate number", () => {
    it("should return true with GP012K", function () {
      expect(isValid("GP012K")).to.equal(true);
    });
  });
  describe("international plate number", () => {
    it("should return true with IT110RE", function () {
      expect(isValid("IT110RE")).to.equal(true);
    });
  });
  describe("motorcyle plate number", () => {
    it("should return true with RC300K", function () {
      expect(isValid("RC300K")).to.equal(true);
    });
  });
});