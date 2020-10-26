require('dotenv').config()
const { expect } = require('chai')
const Ipaidthat = require('../index')

describe('collectorInstanceList', () => {
  it('returns an array', (done) => {
    const client = new Ipaidthat(process.env.IPAIDTHAT_TOKEN)
    client.collectorInstanceList()
      .then(response => {
        expect(response).to.be.an('array')
        done()
      })
      .catch(err => done(err))
  }).timeout(3000)
})