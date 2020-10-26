require('dotenv').config()
const { expect } = require('chai')
const Ipaidthat = require('../index')

describe('firmsByIdUpdateOrganizations', () => {
  it('403', (done) => {
    const client = new Ipaidthat(process.env.IPAIDTHAT_TOKEN)
    client.firmsByIdUpdateOrganizations(1)
      .catch(err => {
        expect(err.statusCode).to.equal(401)
        done()
      })
  }).timeout(5000)
})