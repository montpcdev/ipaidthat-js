require('dotenv').config()
const { expect } = require('chai')
const Ipaidthat = require('../index')

describe('usersById', () => {
  it('throws 403 if forbidden', (done) => {
    const client = new Ipaidthat(process.env.IPAIDTHAT_TOKEN)
    client.usersById(1)
      .catch(err => {
        expect(err.statusCode).to.equal(403)
        done()
      })
  }).timeout(5000)
})