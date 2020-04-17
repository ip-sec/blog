import axios from 'axios'
import { Message } from 'element-ui'
import httpStatus from './http-status'
import {getTime} from './datetime'

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
            return Promise.reject(new Error(httpStatus(response.status) || 'Error'))
        }else if(response.data.code != 200){
            Message({
                message: response.data.error,
                type: 'error',
                center: true
            })
            return Promise.reject(new Error(response.data.error || 'Error'))
        }else{
            response.config.method == 'get' ? getTime(response.data.data) : ''
	    response.config.method == 'post' ?  Message({
                message: response.data.data,
                type: 'success',
                center: true
            }) : ''
            return response.data
        }
    },
    error => {
        return Promise.reject(error)
    }
)

export default service