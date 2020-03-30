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
//更新日志点击数量及点赞数量
export function updateDiary(params,data){
    return service({
        url: '/admin/diarys' + params,
        method: 'put',
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
//更新教程点击数量及点赞数量
export function updateTutorial(params, data){
    return service({
        url: '/admin/tutorials' + params,
        method: 'put',
        data
    })
}
//请求前台图片数据
export function photo(){
    return service({
        url: '/admin/photos',
        method: 'get'
    })
}