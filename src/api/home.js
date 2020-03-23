import server from '../utils/request'
//请求前台主页数据
export function home(){
    return server({
        url: 'http://localhost/admin/base/home',
        type: 'get'
    })
}