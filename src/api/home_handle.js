import service from '../utils/request'

//提交前台留言数据
export function saveMessage(data){
    return service({
        url: '/home/messages',
        method: 'post',
        data
    })
}
//更新日志点击数量及点赞数量
export function updateDiary(params,data){
    return service({
        url: '/home/diarys' + params,
        method: 'put',
        data
    })
}
//更新教程点击数量及点赞数量
export function updateTutorial(params, data){
    return service({
        url: '/home/tutorials' + params,
        method: 'put',
        data
    })
}

//提交前台访问数据
export function saveDataNum(data){
    return service({
        url: '/home/base/saveCounts',
        method: 'post',
        data
    })
}