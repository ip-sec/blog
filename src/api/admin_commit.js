import service from '../utils/request'

export function login(data) {
    return service({
        url: '/admin/base/login',
        method: 'post',
        data
    })
}

export function savePhoto(data) {
    return service({
        url: '/admin/photos',
        method: 'post',
        data
    })
}

export function delPhotoFile(data) {
    return service({
        url: '/admin/base/delPhotoFile',
        method: 'post',
        data
    })
}


