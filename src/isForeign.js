const {
  SPECIALS
} = require("./specials")
const {
  checkForeign
} = require("./format")

/**
 * 
 * @param {string} pn 
 * @returns {boolean}
 * @example
 * isForeign("IT001RE"); // => true
 */
exports.isForeign = (pn) => {
  const str = !pn ? "" : pn
  const [logo, code, letters] = checkForeign(str)
  const plateNumber = `${logo}${code}${letters}`
  if (plateNumber.length !== 7) {
    return false
  }
  if (!SPECIALS[logo.toUpperCase()]) {
    return false
  }
  return /^[\s]*(IT)[\s]*[0-9]{3}[\s]*[A-Z]{2}$/i.test(plateNumber)
}