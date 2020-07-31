export default class Api {
    constructor({ url, headers = {} }) {
        this.url = url;
        this.headers = headers;
    }

    _handleResponse(response) {
        if (response.ok) {
            return response.json();
        } else {
            return Promise.reject(response.statusText)
        }
    }

    _handleResponseError(err) {
        return Promise.reject(err.message)
    }

    getRequest() {
        return fetch(this.url, { headers: this.headers })
            .then(this._handleResponse)
            .catch(this._handleResponseError)
    }

}