require('dotenv').config()
const { expect } = require('chai')
const Ipaidthat = require('../index')

describe('firmsList', () => {
  context('has empty options', () => {
    it('403', (done) => {
      const client = new Ipaidthat(process.env.IPAIDTHAT_TOKEN)
      client.firmsList()
        .catch(err => {
          expect(err.statusCode).to.equal(403)
          done()
        })
    }).timeout(5000)
  })
  context('has name as an option', () => {
    it('403', (done) => {
      const client = new Ipaidthat(process.env.IPAIDTHAT_TOKEN)
      client.firmsList({ name: 1 })
        .catch(err => {
          expect(err.statusCode).to.equal(403)
          done()
        })
    }).timeout(5000)
  })
})