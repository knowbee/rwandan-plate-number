const {
  SPECIALS
} = require("./specials")
const {
  motoPlate
} = require("./helper")

/**
 * 
 * @param {string} pn 
 * @returns {boolean}
 * @example
 * isMoto("RA001P"); // => true
 */
exports.isMoto = (pn) => {
  const str = !pn ? "" : pn
  const [logo, code, letter] = motoPlate(str)
  const plateNumber = `${logo}${code}${letter}`
  if (plateNumber.length !== 6) {
    return false
  }
  return /^[\s]*(R[A-Z])[\s]*[0-9]{3}[\s]*[A-Z]{1}$/i.test(plateNumber)
}