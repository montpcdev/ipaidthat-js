const queryString = require('querystring')
const request = require('minimal-request-promise')
const baseUrl = 'https://ipaidthat.io/api/v2'


/**
 *
 *
 * @class Ipaidthat
 */
class Ipaidthat {

    /**
     * Creates an instance of Ipaidthat.
     * @param {*} token
     * @memberof Ipaidthat
     */
    constructor(token) {
      if (!token) { throw new Error('No token given.') }
      this.token = token
    }
  
    /**
     *
     *
     * 
     * @memberof Ipaidthat
     */
    async categoriesList () {
      const options = { headers: { 'Authorization': 'Token '+this.token } }
      return request.get(`${baseUrl}/categories/`, options)
        .then(res => JSON.parse(res.body))
    }

    /**
     *
     *
     * @param {*} categoryId
     * @memberof Ipaidthat
     */
    async categoryByID (categoryId) {
        const options = { headers: { 'Authorization': 'Token '+this.token } }
        return request.get(`${baseUrl}/categories/${categoryId}`, options)
            .then(res => JSON.parse(res.body))
    }
    
    /**
     *
     *
     * 
     * @memberof Ipaidthat
     */
    async collectorInstancesList (categoryId) {
        const options = { headers: { 'Authorization': 'Token '+this.token } }
        return request.get(`${baseUrl}/collectorinstances/`, options)
            .then(res => JSON.parse(res.body))
    }

    /**
     *
     *
     * @param {*} collectorInstanceId
     * @memberof Ipaidthat
     */
    async collectorInstanceByID (collectorInstanceId) {
        const options = { headers: { 'Authorization': 'Token '+this.token } }
        return request.get(`${baseUrl}/collectorinstances/${collectorInstanceId}`, options)
            .then(res => JSON.parse(res.body))
    }
    
    /**
     *
     *
     * @param {*} collectorInstanceId
     * @memberof Ipaidthat
     */
    async collectorInstanceEditByID (collectorInstanceId) {
        const options = { headers: { 'Authorization': 'Token '+this.token } }
        return request.get(`${baseUrl}/collectorinstances/${collectorInstanceId}/edit`, options)
            .then(res => JSON.parse(res.body))
    }
    
    /**
     *
     *
     * @param {*} collectorInstanceId
     * @memberof Ipaidthat
     */
    async collectorInstanceRefreshByID (collectorInstanceId) {
        const options = { headers: { 'Authorization': 'Token '+this.token } }
        return request.get(`${baseUrl}/collectorinstances/${collectorInstanceId}/refresh`, options)
            .then(res => JSON.parse(res.body))
    }
    
    /**
     *
     *
     * 
     * @memberof Ipaidthat
     */
    async collectorsList () {
        const options = { headers: { 'Authorization': 'Token '+this.token } }
        return request.get(`${baseUrl}/collectors/`, options)
            .then(res => JSON.parse(res.body))
    }
    
    /**
     *
     *
     * 
     * @memberof Ipaidthat
     */
    async collectorConnect () {
        const options = { headers: { 'Authorization': 'Token '+this.token } }
        return request.get(`${baseUrl}/collectors/connect`, options)
            .then(res => JSON.parse(res.body))
    }
    
    /**
     *
     *
     * @param {*} collectorId
     * @memberof Ipaidthat
     */
    async collectorByID (collectorId) {
        const options = { headers: { 'Authorization': 'Token '+this.token } }
        return request.get(`${baseUrl}/collectors/${collectorId}`, options)
            .then(res => JSON.parse(res.body))
    }
    
    /**
     *
     *
     * @param {*} collectorId
     * @memberof Ipaidthat
     */
    async collectorConnectByID (collectorId) {
        const options = { headers: { 'Authorization': 'Token '+this.token } }
        return request.get(`${baseUrl}/collectors/${collectorId}/connect`, options)
            .then(res => JSON.parse(res.body))
    }
    
    /**
     *
     *
     * @param {*} params
     * @memberof Ipaidthat
     */
    async entriesList (params) {
        const options = { headers: { 'Authorization': 'Token '+this.token } }
        return request.get(`${baseUrl}/entries?${queryString.stringify(params)}`, options)
            .then(res => JSON.parse(res.body))
    }
    
    /**
     *
     *
     * @param {*} entryId
     * @memberof Ipaidthat
     */
    async entryByID (entryId) {
        const options = { headers: { 'Authorization': 'Token '+this.token } }
        return request.get(`${baseUrl}/entries/${entryId}`, options)
            .then(res => JSON.parse(res.body))
    }
    
    /**
     *
     *
     * @param {*} entryId
     * @memberof Ipaidthat
     */
    async entryDownloadByID (entryId) {
        const options = { headers: { 'Authorization': 'Token '+this.token } }
        return request.get(`${baseUrl}/entries/${entryId}/download`, options)
            .then(res => JSON.parse(res.body))
    }
    
    /**
     *
     *
     * @param {*} params
     * @memberof Ipaidthat
     */
    async firmsList (params) {
        const options = { headers: { 'Authorization': 'Token '+this.token } }
        return request.get(`${baseUrl}/firms?${queryString.stringify(params)}`, options)
            .then(res => JSON.parse(res.body))
    }
    
    /**
     *
     *
     * @param {*} firmId
     * @memberof Ipaidthat
     */
    async firmByID (firmId) {
        const options = { headers: { 'Authorization': 'Token '+this.token } }
        return request.get(`${baseUrl}/firms/${firmId}`, options)
    }
    
    /**
     *
     *
     * @param {*} organizationId
     * @memberof Ipaidthat
     */
    async organizationByID (organizationId) {
        const options = { headers: { 'Authorization': 'Token '+this.token } }
        return request.get(`${baseUrl}/organizations/${organizationId}`, options)
    }
    
    /**
     *
     *
     * 
     * @memberof Ipaidthat
     */
    async providersList () {
        const options = { headers: { 'Authorization': 'Token '+this.token } }
        return request.get(`${baseUrl}/providers/`, options)
            .then(res => JSON.parse(res.body))
    }
    
    /**
     *
     *
     * @param {*} providerId
     * @memberof Ipaidthat
     */
    async providerByID (providerId) {
        const options = { headers: { 'Authorization': 'Token '+this.token } }
        return request.get(`${baseUrl}/providers/${providerId}`, options)
    }
    
    /**
     *
     *
     * 
     * @memberof Ipaidthat
     */
    async tagsList () {
        const options = { headers: { 'Authorization': 'Token '+this.token } }
        return request.get(`${baseUrl}/tags/`, options)
            .then(res => JSON.parse(res.body))
    }
    
    /**
     *
     *
     * @param {*} tagId
     * @memberof Ipaidthat
     */
    async tagByID (tagId) {
        const options = { headers: { 'Authorization': 'Token '+this.token } }
        return request.get(`${baseUrl}/tags/${tagId}`, options)
    }
    
    /**
     *
     *
     * 
     * @memberof Ipaidthat
     */
    async transactionsList () {
        const options = { headers: { 'Authorization': 'Token '+this.token } }
        return request.get(`${baseUrl}/transactions/`, options)
            .then(res => JSON.parse(res.body))
    }
    
    /**
     *
     *
     * 
     * @memberof Ipaidthat
     */
    async missingInvoicesList () {
        const options = { headers: { 'Authorization': 'Token '+this.token } }
        return request.get(`${baseUrl}/transactions/missing_invoices/`, options)
            .then(res => JSON.parse(res.body))
    }
    
    /**
     *
     *
     * @param {*} transactionId
     * @memberof Ipaidthat
     */
    async transactionByID (transactionId) {
        const options = { headers: { 'Authorization': 'Token '+this.token } }
        return request.get(`${baseUrl}/transactions/${transactionId}`, options)
    }

    /**
     *
     *
     * 
     * @memberof Ipaidthat
     */
    async usersList () {
        const options = { headers: { 'Authorization': 'Token '+this.token } }
        return request.get(`${baseUrl}/users/`, options)
            .then(res => JSON.parse(res.body))
    }
    
    /**
     *
     *
     * @param {*} userId
     * @memberof Ipaidthat
     */
    async userByID (userId) {
        const options = { headers: { 'Authorization': 'Token '+this.token } }
        return request.get(`${baseUrl}/users/${userId}`, options)
    }
  }
  
  module.exports = Ipaidthat