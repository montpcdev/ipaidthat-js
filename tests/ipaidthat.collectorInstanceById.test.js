require('dotenv').config()
const { expect } = require('chai')
const Ipaidthat = require('../index')

describe('collectorInstanceById', () => {
  it('returns an array', (done) => {
    const client = new Ipaidthat(process.env.IPAIDTHAT_TOKEN)
    client.collectorInstanceById(process.env.IPAIDTHAT_COLLECTORINSTANCEID)
      .catch(err => {
        expect(err.statusCode).to.equal(404)
        done()
      })
  }).timeout(5000)
})