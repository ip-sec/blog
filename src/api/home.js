import service from '../utils/request'
//请求前台主页数据
export function head(){
    return service({
        url: '/home/navs',
        method: 'get'
    })
}
//请求前台留言数据
export function message(){
    return service({
        url: '/home/messages',
        method: 'get'
    })
}

//请求前台日志数据
export function diary(params = ''){
    return service({
        url: '/home/diarys' + params,
        method: 'get',
    })
}

//请求前台教程数据
export function tutorial(params = ''){
    return service({
        url: '/home/tutorials' + params,
        method: 'get'
    })
}

//请求前台图片数据
export function photo(){
    return service({
        url: '/home/photos',
        method: 'get'
    })
}