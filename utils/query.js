const queryString = require('querystring')

/**
 *
 *
 * @param {*} obj
 * @return {*} 
 */
function query (obj) {
  return queryString.stringify(obj)
}

module.exports = query