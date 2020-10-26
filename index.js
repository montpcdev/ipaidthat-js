const query = require('./utils/query')
const request = require('minimal-request-promise')

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
        this.options = {
            headers: {
                'Authorization': `Token ${token}`,
                'accept': 'application/json'
            }
        }
    }

    /**
     *
     *
     * 
     * @memberof Ipaidthat
     */
    categoriesList () {
        return request
            .get(
                'https://ipaidthat.io/api/v2/categories/',
                this.options
            )
            .then(res => JSON.parse(res.body))
    }

    /**
     *
     *
     * @param {*} id
     * @memberof Ipaidthat
     */
    categoriesById (id) {
        return request
            .get(
                `https://ipaidthat.io/api/v2/categories/${id}/`,
                this.options
            )
            .then(res => JSON.parse(res.body))
    }

    /**
     *
     *
     * 
     * @memberof Ipaidthat
     */
    collectorInstanceList () {
        return request.get(
            'https://ipaidthat.io/api/v2/collectorinstances/',
            this.options
        )
            .then(res => JSON.parse(res.body))
    }

    /**
     *
     *
     * @param {*} id
     * @memberof Ipaidthat
     */
    collectorInstanceById (id) {
        return request.get(
            `https://ipaidthat.io/api/v2/collectorinstances/${id}/`,
            this.options
        )
            .then(res => JSON.parse(res.body))
    }

    /**
     *
     *
     * @param {*} id
     * @return {*} 
     * @memberof Ipaidthat
     */
    collectorInstanceByIdDelete (id) {
        return request.delete(
            `https://ipaidthat.io/api/v2/collectorinstances/${id}/`,
            this.options
        )
            .then(res => JSON.parse(res.body))
    }

    /**
     *
     *
     * @param {*} collectorInstanceId
     * @memberof Ipaidthat
     */
    collectorInstanceByIdEdit (id) {
        return request.get(
            `https://ipaidthat.io/api/v2/collectorinstances/${id}/edit/`,
            this.options
        )
            .then(res => JSON.parse(res.body))
    }

    /**
     *
     *
     * @param {*} collectorInstanceId
     * @memberof Ipaidthat
     */
    collectorInstanceByIdRefresh (id) {
        return request.get(
            `https://ipaidthat.io/api/v2/collectorinstances/${id}/refresh/`,
            this.options
        )
            .then(res => JSON.parse(res.body))
    }

    /**
     *
     *
     * 
     * @memberof Ipaidthat
     */
    collectorsList () {
        return request.get(
            'https://ipaidthat.io/api/v2/collectors/',
            this.options
        )
            .then(res => JSON.parse(res.body))
    }

    /**
     *
     *
     * 
     * @memberof Ipaidthat
     */
    collectorsConnectList () {
        return request.get(
            'https://ipaidthat.io/api/v2/collectors/connect/',
            this.options
        )
            .then(res => JSON.parse(res.body))
    }

    /**
     *
     *
     * @param {*} collectorId
     * @memberof Ipaidthat
     */
    collectorsById (id) {
        return request.get(
            `https://ipaidthat.io/api/v2/collectors/${id}/`,
            this.options
        )
            .then(res => JSON.parse(res.body))
    }

    /**
     *
     *
     * @param {*} collectorId
     * @memberof Ipaidthat
     */
    collectorsByIdConnect (id) {
        return request.get(
            `https://ipaidthat.io/api/v2/collectors/${id}/connect`,
            this.options
        )
            .then(res => JSON.parse(res.body))
    }

    /**
     *
     *
     * @param {*} params
     * @memberof Ipaidthat
     */
    entriesList (options) {
        return request.get(
            `https://ipaidthat.io/api/v2/entries/?${query(options)}`,
            this.options
        )
            .then(res => JSON.parse(res.body))
    }

    /**
     *
     *
     * @param {*} id
     * @memberof Ipaidthat
     */
    entriesById (id) {
        return request.get(
            `https://ipaidthat.io/api/v2/entries/${id}/`,
            this.options
        )
            .then(res => JSON.parse(res.body))
    }

    /**
     *
     *
     * @param {*} entryId
     * @memberof Ipaidthat
     */
    entriesByIdDownload (id) {
        return request.get(
            `https://ipaidthat.io/api/v2/entries/${id}/download/`,
            this.options
        )
            .then(res => JSON.parse(res.body))
    }

    /**
     *
     *
     * @param {*} params
     * @memberof Ipaidthat
     */
    firmsList (params) {
        const options = { headers: { 'Authorization': 'Token ' + this.token } }
        return request.get(`${baseUrl}/firms?${queryString.stringify(params)}`, options)
            .then(res => JSON.parse(res.body))
    }

    /**
     *
     *
     * @param {*} firmId
     * @memberof Ipaidthat
     */
    firmByID (firmId) {
        const options = { headers: { 'Authorization': 'Token ' + this.token } }
        return request.get(`${baseUrl}/firms/${firmId}`, options)
    }

    /**
     *
     *
     * @param {*} organizationId
     * @memberof Ipaidthat
     */
    organizationByID (organizationId) {
        const options = { headers: { 'Authorization': 'Token ' + this.token } }
        return request.get(`${baseUrl}/organizations/${organizationId}`, options)
    }

    /**
     *
     *
     * 
     * @memberof Ipaidthat
     */
    providersList () {
        const options = { headers: { 'Authorization': 'Token ' + this.token } }
        return request.get(`${baseUrl}/providers/`, options)
            .then(res => JSON.parse(res.body))
    }

    /**
     *
     *
     * @param {*} providerId
     * @memberof Ipaidthat
     */
    providerByID (providerId) {
        const options = { headers: { 'Authorization': 'Token ' + this.token } }
        return request.get(`${baseUrl}/providers/${providerId}`, options)
    }

    /**
     *
     *
     * 
     * @memberof Ipaidthat
     */
    tagsList () {
        const options = { headers: { 'Authorization': 'Token ' + this.token } }
        return request.get(`${baseUrl}/tags/`, options)
            .then(res => JSON.parse(res.body))
    }

    /**
     *
     *
     * @param {*} tagId
     * @memberof Ipaidthat
     */
    tagByID (tagId) {
        const options = { headers: { 'Authorization': 'Token ' + this.token } }
        return request.get(`${baseUrl}/tags/${tagId}`, options)
    }

    /**
     *
     *
     * 
     * @memberof Ipaidthat
     */
    transactionsList () {
        const options = { headers: { 'Authorization': 'Token ' + this.token } }
        return request.get(`${baseUrl}/transactions/`, options)
            .then(res => JSON.parse(res.body))
    }

    /**
     *
     *
     * 
     * @memberof Ipaidthat
     */
    missingInvoicesList () {
        const options = { headers: { 'Authorization': 'Token ' + this.token } }
        return request.get(`${baseUrl}/transactions/missing_invoices/`, options)
            .then(res => JSON.parse(res.body))
    }

    /**
     *
     *
     * @param {*} transactionId
     * @memberof Ipaidthat
     */
    transactionByID (transactionId) {
        const options = { headers: { 'Authorization': 'Token ' + this.token } }
        return request.get(`${baseUrl}/transactions/${transactionId}`, options)
    }

    /**
     *
     *
     * 
     * @memberof Ipaidthat
     */
    usersList () {
        const options = { headers: { 'Authorization': 'Token ' + this.token } }
        return request.get(`${baseUrl}/users/`, options)
            .then(res => JSON.parse(res.body))
    }

    /**
     *
     *
     * @param {*} userId
     * @memberof Ipaidthat
     */
    userByID (userId) {
        const options = { headers: { 'Authorization': 'Token ' + this.token } }
        return request.get(`${baseUrl}/users/${userId}`, options)
    }
}

module.exports = Ipaidthat