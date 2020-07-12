/**
 * 
 * @param {string} pn 
 */

exports.specialPlate = (pn) => {
  const parts = pn.replace(/^[\s]*(GP|RNP|GR|RDF)([0-9]{3})[^A-Z]*([A-Z]{1})[\s]*$/i, "$1,$2,$3")
  return parts.split(",")
}