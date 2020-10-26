require('dotenv').config()
const { expect } = require('chai')
const Ipaidthat = require('../index')

describe('entriesList', () => {
  context('has empty options', () => {
    it('returns an array', (done) => {
      const client = new Ipaidthat(process.env.IPAIDTHAT_TOKEN)
      client.entriesList()
        .then(response => {
          expect(response).to.be.an('object')
          done()
        })
        .catch(err => done(err))
    }).timeout(5000)
  })
  context('has category_id as an option', () => {
    it('returns an array', (done) => {
      const client = new Ipaidthat(process.env.IPAIDTHAT_TOKEN)
      client.entriesList({ category_id: process.env.IPAIDTHAT_CATEGORYID })
        .then(response => {
          expect(response).to.be.an('object')
          done()
        })
        .catch(err => done(err))
    }).timeout(5000)
  })
})