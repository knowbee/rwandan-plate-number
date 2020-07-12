const {
  isSpecial
} = require("./isSpecial")
const {
  isMoto
} = require("./isMoto")

/**
 * Returns true if plate number is a Rwandan valid plate number
 * @param {string} plateNumber
 * @returns {boolean}
 * @example
 * isValid("RNP012P") // => true
 */
exports.isValid = (plateNumber) => {
  if (isSpecial(plateNumber)) {
    return true
  }
  if (isMoto(plateNumber)) {
    return true
  }
}