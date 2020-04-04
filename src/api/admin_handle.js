import service from '../utils/request'

export function resetCache(){
    return service({
        url: '/admin/base/resetCache',
        method: 'get'
    })
}

export function delPhoto(params){
    return service({
        url: '/admin/photos' + params,
        method: 'delete'
    })
}

export function delMessage(params){
    return service({
        url: '/admin/messages' + params,
        method: 'delete'
    })
}
