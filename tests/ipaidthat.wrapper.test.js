const { expect } = require('chai')
const Ipaidthat = require('../index')

describe('wrapper', () => {
  context('No token given', () => {
    it('throws error: No token given', () => {
      expect(() => new Ipaidthat(false)).to.throw('No token given')
    })
  })

  context('Token given', () => {
    it('creates an instance of the wrapper', () => {
      expect(() => new Ipaidthat(true)).to.be.a('function')
    })

    it('has options', () => {
      const client = new Ipaidthat(true)
      expect(client).has.property('options')
    })

    it('has headers in options', () => {
      const client = new Ipaidthat(true)
      expect(client.options).has.property('headers')
    })

    it('has Authorization in headers', () => {
      const client = new Ipaidthat(true)
      expect(client.options.headers).has.property('Authorization')
    })
  })
})