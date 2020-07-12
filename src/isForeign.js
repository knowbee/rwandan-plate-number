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
  // IT269RE
  if (plateNumber.length !== 7) {
    return false
  }
  if (!SPECIALS[logo.toUpperCase()]) {
    return false
  }
  return /^[\s]*(IT)[0-9]{3}[A-Z]{2}$/i.test(plateNumber)
}