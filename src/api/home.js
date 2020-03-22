import server from '@/assets/utils/request'
//请求前台主页数据
export function home(data){
    return server({
        url: '/base/home',
        type: 'get',
        params: ''
    })
}