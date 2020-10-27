require('dotenv').config()
const { expect } = require('chai')
const Ipaidthat = require('../index')

describe('transactionsList', () => {
  context('has empty options', () => {
    it('returns an array', (done) => {
      const client = new Ipaidthat(process.env.IPAIDTHAT_TOKEN)
      client.transactionsList()
        .then(response => {
          expect(response).to.be.an('object')
          done()
        })
        .catch(err => done(err))
    }).timeout(5000)
  })
  context('has min_amount as an option', () => {
    it('returns an array', (done) => {
      const client = new Ipaidthat(process.env.IPAIDTHAT_TOKEN)
      client.transactionsList({ min_amount: 1 })
        .then(response => {
          expect(response).to.be.an('object')
          done()
        })
        .catch(err => done(err))
    }).timeout(5000)
  })
})