const {
  SPECIALS
} = require("./specials")
const {
  checkDiplomatic
} = require("./format")

/**
 * 
 * @param {string} pn 
 * @returns {boolean}
 * @example
 * isDiplomatic("9CMD 01 R"); // => true
 */
exports.isDiplomatic = (pn) => {
  const str = !pn ? "" : pn
  const [prefix, logo, code, letter] = checkDiplomatic(str)
  const plateNumber = `${prefix}${logo}${code}${letter}`

  if (plateNumber.trim().length < 6 || plateNumber.trim().length > 7) {
    return false
  }
  if (!SPECIALS[logo.toUpperCase()]) {
    return false
  }
  return /^[0-9]{1}(CD|CMD)[\s]*[0-9]{2}[\s]*[A-Z]{1}$/i.test(plateNumber)
}