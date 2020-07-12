const {
  isSpecial
} = require("../src");
const chai = require("chai");
const expect = chai.expect;

describe("rwandan special plate number", async () => {
  describe("special plate number", () => {
    it("should return true with GP012K", function () {
      expect(isSpecial("GP012K")).to.equal(true);
    });
  });
});