import axios from 'axios'
import { Message } from 'element-ui'
import httpStatus from './http-status'
import getTime from './datetime'

const service = axios.create({
    baseURL: process.env.BASE_API,
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
                center: true
            })
        }else{
            response.config.method == 'get' ? getTime(response.data.data) : Message({
                message: response.data.data,
                type: 'success',
                center: true
            })
            return response.data
        }
    },
    error => {
        return Promise.reject(error)
    }
)

export default service