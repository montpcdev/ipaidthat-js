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
                'Content-Type': 'application/json',
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
            `https://ipaidthat.io/api/v2/collectors/${id}/connect/`,
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
    firmsList (options) {
        return request.get(
            `https://ipaidthat.io/api/v2/firms/?${query(options)}`,
            this.options
        )
            .then(res => JSON.parse(res.body))
    }

    firmsNew (body) {
        return request.post(
            `https://ipaidthat.io/api/v2/firms/`,
            {
                body: JSON.stringify(body),
                ...this.options
            },
        )
            .then(res => JSON.parse(res.body))
    }

    firmsByIdUpdateOrganizations (id) {
        return request.post(
            `https://ipaidthat.io/api/v2/firms/${id}/update_organisations/`,
            this.options
        )
            .then(res => JSON.parse(res.body))
    }

    /**
     *
     *
     * @param {*} firmId
     * @memberof Ipaidthat
     */
    firmsById (id) {
        return request.get(
            `https://ipaidthat.io/api/v2/firms/${id}/`,
            this.options
        )
            .then(res => JSON.parse(res.body))
    }

    /**
     *
     *
     * @param {*} id
     * @param {*} body
     * @return {*} 
     * @memberof Ipaidthat
     */
    firmsByIdUpdate (id, body) {
        return request.put(
            `https://ipaidthat.io/api/v2/firms/${id}/`,
            {
                body: JSON.stringify(body),
                ...this.options
            }
        )
            .then(res => JSON.parse(res.body))
    }

    /**
     *
     *
     * @param {*} id
     * @param {*} body
     * @return {*} 
     * @memberof Ipaidthat
     */
    firmsByIdDelete (id, body) {
        return request.delete(
            `https://ipaidthat.io/api/v2/firms/${id}/`,
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
    organizationsById (id) {
        return request.get(
            `https://ipaidthat.io/api/v2/organisations/${id}/`,
            this.options
        )
    }

    /**
     *
     *
     * @param {*} id
     * @memberof Ipaidthat
     */
    organizationsByIdUpdate (id, body) {
        return request.put(
            `https://ipaidthat.io/api/v2/organisations/${id}/`,
            {
                body: JSON.stringify(body),
                ...this.options
            }
        )
    }

    /**
     *
     *
     * @param {*} id
     * @memberof Ipaidthat
     */
    organizationsByIdDelete (id, body) {
        return request.delete(
            `https://ipaidthat.io/api/v2/organisations/${id}/`,
            {
                body: JSON.stringify(body),
                ...this.options
            }
        )
    }

    /**
     *
     *
     * 
     * @memberof Ipaidthat
     */
    providersList () {
        return request.get(
            `https://ipaidthat.io/api/v2/providers/`,
            this.options
        )
            .then(res => JSON.parse(res.body))
    }

    /**
     *
     *
     * @param {*} providerId
     * @memberof Ipaidthat
     */
    providersById (id) {
        return request.get(
            `https://ipaidthat.io/api/v2/providers/${id}/`,
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
    tagsList () {
        return request.get(
            `https://ipaidthat.io/api/v2/tags/`,
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
    tagsById (id) {
        return request.get(
            `https://ipaidthat.io/api/v2/tags/${id}/`,
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
    transactionsList (options) {
        return request.get(
            `https://ipaidthat.io/api/v2/transactions/?${query(options)}`,
            this.options
        )
            .then(res => JSON.parse(res.body))
    }

    transactionsMissingInvoicesList (options) {
        return request.get(
            `https://ipaidthat.io/api/v2/transactions/missing_invoices/?${query(options)}`,
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
    transactionsById (id) {
        return request.get(
            `https://ipaidthat.io/api/v2/transactions/${id}/`,
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
    transactionsByIdToggleIgnore (id, body) {
        return request.post(
            `https://ipaidthat.io/api/v2/transactions/${id}/toggle_ignore/`,
            {
                body: JSON.stringify(body),
                ...this.options
            }
        )
            .then(res => JSON.parse(res.body))
    }

    /**
     *
     *
     * 
     * @memberof Ipaidthat
     */
    usersList () {
        return request.get(
            'https://ipaidthat.io/api/v2/users/',
            this.options
        )
            .then(res => JSON.parse(res.body))
    }

    /**
     *
     *
     * @param {*} userId
     * @memberof Ipaidthat
     */
    usersById (id) {
        return request.get(
            `https://ipaidthat.io/api/v2/users/${id}/`,
            this.options
        )
            .then(res => JSON.parse(res.body))
    }

    /**
     *
     *
     * @param {*} body
     * @return {*} 
     * @memberof Ipaidthat
     */
    usersNew (body) {
        return request.get(
            'https://ipaidthat.io/api/v2/users/',
            {
                body: JSON.stringify(body),
                ...this.options
            }
        )
            .then(res => JSON.parse(res.body))
    }

    /**
     *
     *
     * @param {*} id
     * @param {*} body
     * @return {*} 
     * @memberof Ipaidthat
     */
    usersByIdUpdate (id, body) {
        return request.put(
            `https://ipaidthat.io/api/v2/users/${id}/`,
            {
                body: JSON.stringify(body),
                ...this.options
            }
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
    usersByIdDelete (id) {
        return request.delete(
            `https://ipaidthat.io/api/v2/users/${id}/`,
            this.options
        )
            .then(res => JSON.parse(res.body))
    }
}

module.exports = Ipaidthat