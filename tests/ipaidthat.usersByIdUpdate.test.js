require('dotenv').config()
const { expect } = require('chai')
const Ipaidthat = require('../index')

describe('usersByIdUpdate', () => {
  it('411', (done) => {
    const client = new Ipaidthat(process.env.IPAIDTHAT_TOKEN)
    client.usersByIdUpdate(1, {})
      .catch(err => {
        expect(err.statusCode).to.equal(411)
        done()
      })
  }).timeout(5000)
})