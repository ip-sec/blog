import service from '../utils/request'
//请求前台主页数据
export function head(){
    return service({
        url: '/admin/navs',
        method: 'get'
    })
}
//请求前台留言数据
export function message(){
    return service({
        url: '/admin/messages',
        method: 'get'
    })
}

//提交前台留言数据
export function saveMessage(data){
    return service({
        url: '/admin/messages',
        method: 'post',
        data
    })
}
//请求前台日志数据
export function diary(params = ''){
    return service({
        url: '/admin/diarys' + params,
        method: 'get',
    })
}
export function updateDiary(data){
    return service({
        url: '/admin/diarys',
        method: 'post',
        data
    })
}
//请求前台教程数据
export function tutorial(params = ''){
    return service({
        url: '/admin/tutorials' + params,
        method: 'get'
    })
}
export function updateTutorial(data){
    return service({
        url: '/admin/tutorials',
        method: 'post',
        data
    })
}