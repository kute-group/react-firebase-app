import queryString from 'query-string';

class FetchHelper {
    constructor() {
        this.token = null;

        if (global.PLATFROM === 'web') {
            require('whatwg-fetch');
        }
    }

    _adapter(promise, sucess, failed, error) {
        if (global.PLATFROM === 'mobile') {
            promise
                .then(response => {
                    if (response.status === 200) {
                        response.json().then(result => {
                            if (sucess !== undefined && typeof sucess === 'function') {
                                sucess(result);
                            }
                        });
                        return;
                    }

                    response.json().then(result => {
                        if (failed !== undefined && typeof failed === 'function') {
                            failed(result);
                        }
                    });
                })
                .catch(message => {
                    if (message !== undefined && typeof message === 'function') {
                        error(message);
                    }
                });
        }

        if (global.PLATFROM === 'web') {
            promise
                .then(response => {
                    let valids = [200, 201];
                    if (
                        (response.code !== undefined && valids.indexOf(response.code) >= 0) ||
                        (response.status !== undefined && valids.indexOf(response.status) >= 0)
                    ) {
                        response
                            .json()
                            .then(result => {
                                if (sucess !== undefined && typeof sucess === 'function') {
                                    sucess(result);
                                }
                            })
                            .catch(message => {
                                if (error !== undefined && typeof error === 'function') {
                                    error(message);
                                }
                            });

                        return;
                    }

                    response
                        .json()
                        .then(result => {
                            if (failed !== undefined && typeof failed === 'function') {
                                failed(result);
                            }
                        })
                        .catch(message => {
                            if (error !== undefined && typeof error === 'function') {
                                error(message);
                            }
                        });
                })
                .catch(message => {
                    if (error !== undefined && typeof error === 'function') {
                        error(message);
                    }
                });
        }
    }

    _validParam(params, mappers) {
        if (mappers !== undefined && typeof mappers !== 'object') {
            return false;
        }

        if (mappers) {
            mappers.forEach(param => {
                if (params[param] === '' || params[param] === null) {
                    return false;
                }
            });
        }

        return true;
    }

    _parseUrl(url, params) {
        if (url !== '') {
            let counter = 0;

            if (params) {
                for (const key in params) {
                    if (!counter) {
                        url = url + '?' + key + '=' + params[key];
                        counter++;
                        continue;
                    }

                    url = url + '&' + key + '=' + params[key];
                }
            }
        }

        return url;
    }

    _parseBody(params) {
        let body = '';

        let counter = 0;
        if (params) {
            for (const key in params) {
                if (!counter) {
                    body = body + key + '=' + params[key];
                    counter++;
                    continue;
                }

                body = body + '&' + key + '=' + params[key];
            }
        }

        return body;
    }

    get(url, params, mappers, sucess, failed, error) {
        if (!this._validParam(params, mappers)) {
            if (error !== undefined && typeof error === 'function') {
                error();
            }

            return;
        }

        url = this._parseUrl(url, params);

        let promise = fetch(url, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                credentials: 'include',
                Authorization: this.token
            }
        });

        this._adapter(promise, sucess, failed, error);
    }

    post(url, params, mappers, sucess, failed, error) {
        if (!this._validParam(params, mappers)) {
            if (error !== undefined && typeof error === 'function') {
                error();
            }

            return;
        }

        let form = new FormData();
        if (params !== undefined && params !== null) {
            for (const key in params) {
                form.append(key, params[key]);
            }
        }

        let promise = fetch(url, {
            method: 'POST',
            headers: {
                Authorization: this.token
            },
            body: form
        });

        this._adapter(promise, sucess, failed, error);
    }

    postEncode(url, method, params, mappers, sucess, failed, error) {
        if (!this._validParam(params, mappers)) {
            if (error !== undefined && typeof error === 'function') {
                error();
            }

            return;
        }

        let promise = fetch(url, {
            method: method || 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',
                Authorization: 'Bearer ' + this.token
            },
            body: this._parseBody(params)
        });

        this._adapter(promise, sucess, failed, error);
    }

    postRaw(url, method, params, mappers, sucess, failed, error) {
        if (!this._validParam(params, mappers)) {
            if (error !== undefined && typeof error === 'function') {
                error();
            }

            return;
        }

        let promise = fetch(url, {
            method: method || 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + this.token
            },
            body: JSON.stringify(params)
        });

        this._adapter(promise, sucess, failed, error);
    }
    upload(url, method, params, mappers, sucess, failed, error) {
        if (!this._validParam(params, mappers)) {
            if (error !== undefined && typeof error === 'function') {
                error();
            }

            return;
        }

        let form = new FormData();
        if (params !== undefined && params !== null) {
            for (const key in params) {
                form.append(key, params[key]);
            }
        }

        let promise = fetch(url, {
            method: 'POST',
            body: form,
            headers: {
                Authorization: this.token
            }
        });

        this._adapter(promise, sucess, failed, error);
    }

    _makeRequest(url, data = {}, method = 'POST') {
        const headers = this._buildHeaders();
        return fetch(url, {
            method,
            headers,
            body: JSON.stringify(data)
        }).then(response => {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response.json();
        });
    }

    _buildHeaders() {
        const headers = {
            'Content-Type': 'application/json'
        };
        if (this.token) {
            Object.assign(headers, {
                Authorization: 'Bearer ' + this.token
            });
        }
        return headers;
    }

    makePost(url, data = {}) {
        return this._makeRequest(url, data, 'POST');
    }

    makePut(url, data = {}) {
        return this._makeRequest(url, data, 'PUT');
    }

    makePatch(url, data = {}) {
        return this._makeRequest(url, data, 'PATCH');
    }

    makeGet(url, params = {}) {
        const query = queryString.stringify(params);
        const headers = this._buildHeaders();
        return fetch(`${url}?${query}`, {
            method: 'GET',
            headers
        }).then(response => {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response.json();
        });
    }

    makeDelete(url, params = {}) {
        const headers = this._buildHeaders();
        const query = queryString.stringify(params);
        return fetch(`${url}?${query}`, {
            method: 'DELETE',
            headers
        }).then(response => {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response.json();
        });
    }
}

export default new FetchHelper();
