require('dotenv').config()
const { expect } = require('chai')
const Ipaidthat = require('../index')

describe('tagsById', () => {
  it('returns an array', (done) => {
    const client = new Ipaidthat(process.env.IPAIDTHAT_TOKEN)
    client.tagsById(process.env.IPAIDTHAT_TAGSID)
      .then(response => {
        expect(response).to.be.an('object')
        done()
      })
  }).timeout(5000)
})