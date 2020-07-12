/**
 * 
 * @param {string} pn 
 */

exports.specialPlate = (pn) => {
  const parts = pn.replace(/^[\s]*(GP|RNP|GR|RDF)[\s]*([0-9]{3})[\s]*([A-Z]{1})[\s]*$/i, "$1,$2,$3")
  return parts.split(",")
}

/**
 * 
 * @param {string} pn 
 */

exports.motoPlate = (pn) => {
  const parts = pn.replace(/^[\s]*(R[A-Z])[\s]*([0-9]{3})[\s]*([A-Z]{1})[\s]*$/i, "$1,$2,$3")
  return parts.split(",")
}
/**
 * 
 * @param {string} pn 
 */

exports.foreignPlate = (pn) => {
  const parts = pn.replace(/^[\s]*(IT)[\s]*([0-9]{3})[\s]*([A-Z]{2})[\s]*$/i, "$1,$2,$3")
  return parts.split(",")
}
/**
 * 
 * @param {string} pn 
 */

exports.diplomaticPlate = (pn) => {
  const parts = pn.replace(/^[\s]*([0-9]{1})(CD|CMD)[\s]*([0-9]{2})[\s]*([A-Z]{1})[\s]*$/i, "$1,$2,$3,$4")
  return parts.split(",")
}

/**
 * 
 * @param {string} pn 
 */

exports.normalPlate = (pn) => {
  const parts = pn.replace(/^[\s]*(R[A-Z]{2})[\s]*([0-9]{3})[\s]*([A-Z]{1})[\s]*$/i, "$1,$2,$3")
  return parts.split(",")
}