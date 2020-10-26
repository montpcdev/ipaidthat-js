require('dotenv').config()
const { expect } = require('chai')
const Ipaidthat = require('../index')

describe('collectorInstanceByIdDelete', () => {
  it('returns an array', (done) => {
    const client = new Ipaidthat(process.env.IPAIDTHAT_TOKEN)
    client.collectorInstanceByIdDelete(process.env.IPAIDTHAT_COLLECTORINSTANCEID)
      .catch(err => {
        expect(err.statusCode).to.equal(404)
        done()
      })
  }).timeout(4000)
})