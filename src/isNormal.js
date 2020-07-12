const {
  checkNormal
} = require("./format")

/**
 * 
 * @param {string} pn 
 * @returns {boolean}
 * @example
 * isNormal("RAA666P"); // => true
 */
exports.isNormal = (pn) => {
  const str = !pn ? "" : pn
  const [logo, code, letter] = checkNormal(str)
  const plateNumber = `${logo}${code}${letter}`
  if (plateNumber.length !== 7) {
    return false
  }
  return /^(R[A-Z]{2})[\s]*[0-9]{3}[\s]*[A-Z]{1}$/i.test(plateNumber)
}