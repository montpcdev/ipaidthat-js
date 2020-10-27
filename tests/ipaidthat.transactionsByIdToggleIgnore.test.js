require('dotenv').config()
const { expect } = require('chai')
const Ipaidthat = require('../index')

describe('transactionsByIdToggleIgnore', () => {
  it('throws 404 when invalid id is provided', (done) => {
    const client = new Ipaidthat(process.env.IPAIDTHAT_TOKEN)
    client.transactionsByIdToggleIgnore(1)
      .catch(err => {
        expect(err.statusCode).to.equal(404)
        done()
      })
  }).timeout(5000)
})