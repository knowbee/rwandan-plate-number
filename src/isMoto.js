const {
  SPECIALS
} = require("./specials")
const {
  checkMoto
} = require("./format")

/**
 * 
 * @param {string} pn 
 * @returns {boolean}
 * @example
 * isMoto("RA001P"); // => true
 */
exports.isMoto = (pn) => {
  const str = !pn ? "" : pn
  const [logo, code, letter] = checkMoto(str)
  const plateNumber = `${logo}${code}${letter}`
  // RA001P
  if (plateNumber.length !== 6) {
    return false
  }
  return /^[\s]*(R[A-Z])[\s]*[0-9]{3}[A-Z]{1}$/i.test(plateNumber)
}