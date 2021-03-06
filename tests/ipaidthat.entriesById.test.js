require('dotenv').config()
const { expect } = require('chai')
const Ipaidthat = require('../index')

describe('entriesById', () => {
  it('returns an array', (done) => {
    const client = new Ipaidthat(process.env.IPAIDTHAT_TOKEN)
    client.entriesById(process.env.IPAIDTHAT_ENTRIESID)
      .then(response => {
        expect(response).to.be.an('object')
        done()
      })
  }).timeout(5000)
})