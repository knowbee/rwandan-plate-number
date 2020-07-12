const {
  SPECIALS
} = require("./specials")
const {
  foreignPlate
} = require("./helper")

/**
 * 
 * @param {string} pn 
 * @returns {boolean}
 * @example
 * isForeign("IT001RE"); // => true
 */
exports.isForeign = (pn) => {
  const str = !pn ? "" : pn
  const [logo, code, letters] = foreignPlate(str)
  const plateNumber = `${logo}${code}${letters}`
  if (plateNumber.length !== 7) {
    return false
  }
  if (!SPECIALS[logo.toUpperCase()]) {
    return false
  }
  return /^[\s]*(IT)[\s]*[0-9]{3}[\s]*[A-Z]{2}$/i.test(plateNumber)
}