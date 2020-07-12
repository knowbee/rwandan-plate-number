/**
 * 
 * @param {string} pn 
 */

exports.specialPlate = (pn) => {
  const parts = pn.replace(/^[\s]*(GP|RNP|GR|RDF)([0-9]{3})([A-Z]{1})[\s]*$/i, "$1,$2,$3")
  return parts.split(",")
}

exports.checkMoto = (pn) => {
  const parts = pn.replace(/^[\s]*(R[A-Z])([0-9]{3})([A-Z]{1})[\s]*$/i, "$1,$2,$3")
  return parts.split(",")
}

exports.checkForeign = (pn) => {
  const parts = pn.replace(/^[\s]*(IT)([0-9]{3})([A-Z]{2})[\s]*$/i, "$1,$2,$3")
  return parts.split(",")
}