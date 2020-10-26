const queryString = require('querystring')
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
        const options = { headers: { 'Authorization': 'Token ' + this.token } }
        return request.get(`${baseUrl}/collectors/`, options)
            .then(res => JSON.parse(res.body))
    }

    /**
     *
     *
     * 
     * @memberof Ipaidthat
     */
    collectorConnect () {
        const options = { headers: { 'Authorization': 'Token ' + this.token } }
        return request.get(`${baseUrl}/collectors/connect`, options)
            .then(res => JSON.parse(res.body))
    }

    /**
     *
     *
     * @param {*} collectorId
     * @memberof Ipaidthat
     */
    collectorByID (collectorId) {
        const options = { headers: { 'Authorization': 'Token ' + this.token } }
        return request.get(`${baseUrl}/collectors/${collectorId}`, options)
            .then(res => JSON.parse(res.body))
    }

    /**
     *
     *
     * @param {*} collectorId
     * @memberof Ipaidthat
     */
    collectorConnectByID (collectorId) {
        const options = { headers: { 'Authorization': 'Token ' + this.token } }
        return request.get(`${baseUrl}/collectors/${collectorId}/connect`, options)
            .then(res => JSON.parse(res.body))
    }

    /**
     *
     *
     * @param {*} params
     * @memberof Ipaidthat
     */
    entriesList (params) {
        const options = { headers: { 'Authorization': 'Token ' + this.token } }
        return request.get(`${baseUrl}/entries?${queryString.stringify(params)}`, options)
            .then(res => JSON.parse(res.body))
    }

    /**
     *
     *
     * @param {*} entryId
     * @memberof Ipaidthat
     */
    entryByID (entryId) {
        const options = { headers: { 'Authorization': 'Token ' + this.token } }
        return request.get(`${baseUrl}/entries/${entryId}`, options)
            .then(res => JSON.parse(res.body))
    }

    /**
     *
     *
     * @param {*} entryId
     * @memberof Ipaidthat
     */
    entryDownloadByID (entryId) {
        const options = { headers: { 'Authorization': 'Token ' + this.token } }
        return request.get(`${baseUrl}/entries/${entryId}/download`, options)
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