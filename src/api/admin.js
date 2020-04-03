import service from '../utils/request'

export function login(data) {
    return service({
        url: '/admin/base/login',
        method: 'post',
        data
    })
}

export function menu(){
    return service({
        url: '/admin/menus',
        method: 'get'
    })
}

export function photo(){
    return service({
        url: '/admin/photos',
        method: 'get'
    })
}