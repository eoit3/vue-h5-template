import axios from 'axios'
const env = process.env.NODE_ENV === 'development'
let http = axios.create({
    baseURL: env ? '/api': process.env.VUE_APP_BASE_URL,
})
// 请求拦截器
http.interceptors.request.use(
    (config) => {
        config.headers['Content-Type'] = 'application/json;charset=UTF-8'
        return config
    },
    (error) => Promise.reject(error)
)
// 响应拦截器
http.interceptors.response.use(
    (res) => res.data,
    (error) => Promise.reject(error)
)

export default http
