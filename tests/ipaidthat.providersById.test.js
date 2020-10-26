require('dotenv').config()
const { expect } = require('chai')
const Ipaidthat = require('../index')

describe('providersById', () => {
  it('returns an array', (done) => {
    const client = new Ipaidthat(process.env.IPAIDTHAT_TOKEN)
    client.providersById(process.env.IPAIDTHAT_PROVIDERSID)
      .then(response => {
        expect(response).to.be.an('object')
        done()
      })
  }).timeout(5000)
})