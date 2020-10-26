require('dotenv').config()
const { expect } = require('chai')
const Ipaidthat = require('../index')

describe('organizationsById', () => {
  it('403', (done) => {
    const client = new Ipaidthat(process.env.IPAIDTHAT_TOKEN)
    client.organizationsById(1)
      .catch(err => {
        expect(err.statusCode).to.equal(403)
        done()
      })
  }).timeout(5000)
})