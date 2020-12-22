import request from './request.js'
function get(url, data) {
    return new Promise((resolve, reject) => {
        request
            .get(url, { params: data })
            .then(
                (response) => {
                    resolve(response)
                },
                (err) => {
                    reject(err)
                }
            )
            .catch((error) => {
                reject(error)
            })
    })
}

function post(url, data) {
    return new Promise((resolve, reject) => {
        request
            .post(url, data)
            .then(
                (response) => {
                    resolve(response)
                },
                (err) => {
                    reject(err)
                }
            )
            .catch((error) => {
                reject(error)
            })
    })
}

export { get, post }
