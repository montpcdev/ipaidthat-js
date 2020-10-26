require('dotenv').config()
const { expect } = require('chai')
const Ipaidthat = require('../index')

describe('firmsNew', () => {
  it('403', (done) => {
    const client = new Ipaidthat(process.env.IPAIDTHAT_TOKEN)
    client.firmsNew({})
      .catch(err => {
        expect(err.statusCode).to.equal(411)
        done()
      })
  }).timeout(5000)
})