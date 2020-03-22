import axios from 'axios'
import {baseUrl} from './env.js'
const service = axios.create({
    baseUrl: baseUrl,
    timeout: 5000
})

service.interceptors.request.use(
    config => {
        return config
    },
    error => {
        return Promise.reject(error)
    }
)

service.interceptors.response.use(
    config => {
        return config
    },
    error => {
        return Promise.reject(error)
    }
)

export default service