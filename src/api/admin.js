import service from '../utils/request'

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

export function photoCategory(){
    return service({
        url: '/admin/categorys',
        method: 'get'
    })
}

export function message(){
    return service({
        url: '/admin/messages',
        method: 'get'
    })
}

export function sort(){
    return service({
        url: '/admin/sorts',
        method: 'get'
    })
}

//请求前台日志数据
export function diary(params = ''){
    return service({
        url: '/admin/diarys' + params,
        method: 'get',
    })
}

//请求前台教程数据
export function tutorial(params = ''){
    return service({
        url: '/admin/tutorials' + params,
        method: 'get'
    })
}
