require('dotenv').config()
const { expect } = require('chai')
const Ipaidthat = require('../index')

describe('collectorsConnectList', () => {
  it('returns an array', (done) => {
    const client = new Ipaidthat(process.env.IPAIDTHAT_TOKEN)
    client.collectorsConnectList()
      .then(response => {
        expect(response).to.be.an('object')
        done()
      })
      .catch(err => done(err))
  }).timeout(5000)
})