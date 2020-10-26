const queryString = require('querystring')

function query (obj) {
  if (typeof (obj) !== 'object') {
    throw new Error('Cannot turn query if it\'s not an object')
  }

  return queryString.stringify(obj)
}

module.exports = query