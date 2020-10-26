require('dotenv').config()
const { expect } = require('chai')
const Ipaidthat = require('../index')

describe('collectorsById', () => {
  it('returns an array', (done) => {
    const client = new Ipaidthat(process.env.IPAIDTHAT_TOKEN)
    client.collectorsById(process.env.IPAIDTHAT_COLLECTORID)
      .catch(err => {
        expect(err.statusCode).to.equal(404)
        done()
      })
  }).timeout(5000)
})