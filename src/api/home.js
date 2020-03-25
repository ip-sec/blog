import service from '../utils/request'
//请求前台主页数据
export function head(){
    return service({
        url: '/admin/navs',
        type: 'get'
    })
}
//请求前台留言数据
export function message(){
    return service({
        url: '/admin/messages',
        type: 'get'
    })
}
//请求前台日志数据
export function diary(params = ''){
    return service({
        url: '/admin/diarys/' + params,
        type: 'get'
    })
}