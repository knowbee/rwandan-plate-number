const {
  isDiplomatic
} = require("../src");
const chai = require("chai");
const expect = chai.expect;

describe("rwandan diplomatic plate number", async () => {
  describe("diplomatic plate number", () => {
    it("should return true with 9CMD01R", function () {
      expect(isDiplomatic("9CMD01R")).to.equal(true);
    });
    it("should return true with 9CMD 01 R", function () {
      expect(isDiplomatic("9CMD 01 R")).to.equal(true);
    });
    it("should return false with 9 CMD 01 R", function () {
      expect(isDiplomatic("9 CMD 01 R")).to.equal(false);
    });
  });

});