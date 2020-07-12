const {
  isValid
} = require("../src");
const chai = require("chai");
const expect = chai.expect;

describe("rwandan special plate number validator", async () => {
  describe("special plate number", () => {
    it("should return true with GP012K", function () {
      expect(isValid("GP012K")).to.equal(true);
    });
  });
});