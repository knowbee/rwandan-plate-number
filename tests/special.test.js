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
    it("should return true with GP 012K", function () {
      expect(isSpecial("GP 012K")).to.equal(true);
    });
    it("should return true with RDF 896 K", function () {
      expect(isSpecial("RDF 896 K")).to.equal(true);
    });
  });

});