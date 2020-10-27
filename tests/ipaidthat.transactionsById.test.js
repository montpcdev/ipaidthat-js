require('dotenv').config()
const { expect } = require('chai')
const Ipaidthat = require('../index')

describe('transactionsById', () => {
  it('is an object', (done) => {
    const client = new Ipaidthat(process.env.IPAIDTHAT_TOKEN)
    client.transactionsById(process.env.IPAIDTHAT_TRANSACTIONID)
      .then(response => {
        expect(response).to.be.an('object')
        done()
      })
      .catch(err => done(err))
  }).timeout(5000)
})