require('dotenv').config()
const { expect } = require('chai')
const Ipaidthat = require('../index')

describe('categoryList', () => {
  it('returns an array', (done) => {
    const client = new Ipaidthat(process.env.IPAIDTHAT_TOKEN)
    client.categoriesList()
      .then(response => {
        expect(response).to.be.an('array')
        done()
      })
  })
})