const {
  isForeign
} = require("../src");
const chai = require("chai");
const expect = chai.expect;

describe("rwandan foreign plate number", async () => {
  describe("valid plate number", () => {
    it("should return true with IT269RE", function () {
      expect(isForeign("IT269RE")).to.equal(true);
    });
  });
});