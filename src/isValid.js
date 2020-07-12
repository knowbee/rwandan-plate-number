const {
  isSpecial
} = require("./isSpecial")
const {
  isMoto
} = require("./isMoto")

const {
  isForeign
} = require("./isForeign")

const {
  isDiplomatic
} = require("./isDiplomatic")

const {
  isNormal
} = require("./isNormal")

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
  if (isForeign(plateNumber)) {
    return true
  }
  if (isDiplomatic(plateNumber)) {
    return true
  }
  if (isNormal(plateNumber)) {
    return true
  }
  return false
}