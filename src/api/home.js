import service from '../utils/request'
//请求前台主页数据
export function head(){
    return service({
        url: '/admin/navs',
        type: 'get'
    })
}

export function message(){
    return service({
        url: '/admin/messages',
        type: 'get'
    })
}

export function diary(){
    return service({
        url: '/admin/diary',
        type: 'get'
    })
}