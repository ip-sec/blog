import Vue from 'vue'
import Router from 'vue-router'

const layout = () => import('../layout/layoutPage')

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: 'tutorial',
        },
        {
            path: '/tutorial',
            meta:{
                index: 1,
                isToken: false
            },
            component: layout,
            children:[
                { path: '', meta:{ index: 1, title: '幻想天地', isToken: false }, component: () => import('@/pages/tutorial/index') },
                { path: 'pages/:id', meta:{ index: 1, isToken: false }, component: () => import('@/pages/tutorial/listContent') }
            ]
        },
        {
            path: '/diary',
            meta:{
                index: 2,
                isToken: false
            },
            component: layout,
            children:[
                { path: '', meta:{ index: 2, title: '日志' }, component: () => import('@/pages/diary/index') },
                { path: 'pages/:id', meta:{ index: 2, isToken: false }, component: () => import('@/pages/diary/listContent') }
            ]
        },
        {
            path: '/photo',
            meta:{
                index: 3, 
                isToken: false
            },
            component: layout,
            children:[
                { path: '', meta:{ index: 3, title: '相册', isToken: false }, component: () => import('@/pages/photo/index') }
            ]
        },
        {
            path: '/message',
            meta:{
                index: 4,
                isToken: false
            },
            component: layout,
            children:[
                { path: '', meta:{ index: 4, title: '留言', isToken: false }, component: () => import('@/pages/message/index') }
            ]
        },
        {
            path: '/isme',
            meta:{
                index: 5,
                isToken: false
            },
            component: layout,
            children:[
                { path: '', meta:{ index: 5, title: '关于', isToken: false }, component: () => import('@/pages/isme/index') }
            ]
        },
        {
            path: '/error/404',
            meta:{
                title: '页面飞走了~',
                isToken: false
            },
            component: () => import('@/pages/error/404')
        },
        { path: '*', redirect: '/error/404'}
        ]
    })
    