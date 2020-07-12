const {
  isNormal
} = require("../src");
const chai = require("chai");
const expect = chai.expect;

describe("rwandan normal plate number", async () => {
  describe("valid normal plate number", () => {
    it("should return true with RAA001A", function () {
      expect(isNormal("RAA001A")).to.equal(true);
    });
    it("should return true with RAA 001A", function () {
      expect(isNormal("RAA 001A")).to.equal(true);
    });
  });
});