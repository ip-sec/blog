import server from '../utils/request'
//请求前台主页数据
export function head(){
    return server({
        url: '/admin/navs',
        type: 'get'
    })
}

export function message(){
    return server({
        url: '/admin/messages',
        type: 'get'
    })
}