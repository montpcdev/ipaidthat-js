require('dotenv').config()
const { expect } = require('chai')
const Ipaidthat = require('../index')

describe('collectorsList', () => {
  it('returns an array', (done) => {
    const client = new Ipaidthat(process.env.IPAIDTHAT_TOKEN)
    client.collectorsList()
      .then(response => {
        expect(response).to.be.an('array')
        done()
      })
      .catch(err => done(err))
  }).timeout(3000)
})