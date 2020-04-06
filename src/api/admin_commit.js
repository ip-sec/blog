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

export function saveSort(data) {
    return service({
        url: '/admin/sorts',
        method: 'post',
        data
    })
}

export function saveCategory(data) {
    return service({
        url: '/admin/categorys',
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

export function updateCategory(params, data) {
    return service({
        url: '/admin/categorys' + params,
        method: 'put',
        data
    })
}

export function updateSort(params, data) {
    return service({
        url: '/admin/sorts' + params,
        method: 'put',
        data
    })
}


