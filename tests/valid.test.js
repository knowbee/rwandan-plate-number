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
    it("should return true with RC 300K", function () {
      expect(isValid("RC 300K")).to.equal(true);
    });
  });
  describe("diplomatic plate number", () => {
    it("should return true with 9CMD05R", function () {
      expect(isValid("9CMD05R")).to.equal(true);
    });
  });
  describe("empty plate number", () => {
    it("should return false with ''", function () {
      expect(isValid("")).to.equal(false);
    });
  });
  describe("normal plate number", () => {
    it("should return true with RAA001A", function () {
      expect(isValid("RAA001A")).to.equal(true);
    });
  });
});