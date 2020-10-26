require('dotenv').config()
const { expect } = require('chai')
const Ipaidthat = require('../index')

describe('categoriesList', () => {
  it('returns an array', (done) => {
    const client = new Ipaidthat(process.env.IPAIDTHAT_TOKEN)
    client.categoriesList()
      .then(response => {
        expect(response).to.be.an('array')
        done()
      })
      .catch(err => done(err))
  }).timeout(3000)
})