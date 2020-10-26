require('dotenv').config()
const { expect } = require('chai')
const Ipaidthat = require('../index')

describe('entriesById', () => {
  it('returns an array', (done) => {
    const client = new Ipaidthat(process.env.IPAIDTHAT_TOKEN)
    client.entriesById(process.env.IPAIDTHAT_ENTRIESID)
      .catch(err => {
        expect(err.statusCode).to.equal(404)
        done()
      })
  }).timeout(5000)
})