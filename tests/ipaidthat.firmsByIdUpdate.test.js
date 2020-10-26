require('dotenv').config()
const { expect } = require('chai')
const Ipaidthat = require('../index')

describe('firmsByIdUpdate', () => {
  it('403', (done) => {
    const client = new Ipaidthat(process.env.IPAIDTHAT_TOKEN)
    client.firmsByIdUpdate({})
      .catch(err => {
        expect(err.statusCode).to.equal(403)
        done()
      })
  }).timeout(5000)
})