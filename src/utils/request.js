import axios from 'axios'
import { Message } from 'element-ui'
import httpStatus from './http-status'
import {baseUrl} from './env.js'

const service = axios.create({
    baseUrl: baseUrl,
    timeout: 5000,
    withCredentials: true
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
    response => {
        if(response.status !== 200){
            Message({
                message: httpStatus(response.status) || 'error',
                type: 'error',
                center: true,
                duration: 5 * 1000
            })
        }else{
            return response.data
        }
    },
    error => {
        return Promise.reject(error)
    }
)

export default service