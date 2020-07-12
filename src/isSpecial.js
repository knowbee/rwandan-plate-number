const {
  SPECIALS
} = require("./specials")
const {
  specialPlate
} = require("./format")

/**
 * 
 * @param {string} pn 
 * @returns {boolean}
 * @example
 * isSpecial("GR582P"); // => true
 */
exports.isSpecial = (pn) => {
  const str = !pn ? "" : pn
  const [logo, code, letter] = specialPlate(str)
  const plateNumber = `${logo}${code}${letter}`
  // GR252P
  if (plateNumber.length < 6 || plateNumber.length > 7) {
    return false
  }
  if (!SPECIALS[logo.toUpperCase()]) {
    return false
  }
  return /^(GP|RNP|GR|RDF)[0-9]{3}[A-Z]{1}$/i.test(plateNumber)
}