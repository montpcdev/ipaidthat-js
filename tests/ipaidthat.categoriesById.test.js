require('dotenv').config()
const { expect } = require('chai')
const Ipaidthat = require('../index')

describe('categoriesById', () => {
  it('returns an array', (done) => {
    const client = new Ipaidthat(process.env.IPAIDTHAT_TOKEN)
    client.categoriesById(process.env.IPAIDTHAT_CATEGORYID)
      .then(response => {
        expect(response).to.be.an('object')
        done()
      })
  }).timeout(3000)
})