const { expect } = require('chai')
const query = require('../utils/query')

describe('query', () => {
  it('returns a string version of the query', () => {
    const obj = { k: 'a' }
    const result = query(obj)
    expect(result).to.equal('k=a')
  })
})