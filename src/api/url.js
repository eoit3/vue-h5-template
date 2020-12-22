import request from './request.js'

export function getList(data) {
    return request({
        url: '/api/v1/xxx',
        method: 'get',
        params: data,
    })
}
