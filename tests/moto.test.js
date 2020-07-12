const {
  isMoto
} = require("../src");
const chai = require("chai");
const expect = chai.expect;

describe("rwandan motorcycle plate number", async () => {
  describe("valid plate number", () => {
    it("should return true with RA001A", function () {
      expect(isMoto("RA001A")).to.equal(true);
    });
    it("should return true with RA 005B", function () {
      expect(isMoto("RA 005B")).to.equal(true);
    });
  });
});