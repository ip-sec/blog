import Vue from 'vue'
import Router from 'vue-router'

const layout = () => import('../layout/layoutPage')

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: 'home',
        },
        {
            path: '/home',
            meta:{
                index: 1
            },
            component: layout,
            children:[
                { path: '', meta:{ index: 1, title: '幻想天地' }, component: () => import('@/pages/home/index') },
                { path: 'pages/:id', meta:{ index: 1 }, component: () => import('@/pages/home/listContent') }
            ]
        },
        {
            path: '/tutorial',
            meta:{
                index: 2
            },
            component: layout,
            children:[
                { path: '', meta:{ index: 2, title: '日志' }, component: () => import('@/pages/tutorial/index') },
                { path: 'pages/:id', meta:{ index: 2 }, component: () => import('@/pages/tutorial/listContent') }
            ]
        },
        {
            path: '/photo',
            meta:{
                index: 3
            },
            component: layout,
            children:[
                { path: '', meta:{ index: 3, title: '相册' }, component: () => import('@/pages/photo/index') }
            ]
        },
        {
            path: '/message',
            meta:{
                index: 4
            },
            component: layout,
            children:[
                { path: '', meta:{ index: 4, title: '留言' }, component: () => import('@/pages/message/index') }
            ]
        },
        {
            path: '/isme',
            meta:{
                index: 5
            },
            component: layout,
            children:[
                { path: '', meta:{ index: 5, title: '关于' }, component: () => import('@/pages/isme/index') }
            ]
        },
        {
            path: '/isTina',
            meta:{
                title: '登基'
            },
            component: () => import('@/pages/admin/login')
        }, 
        {
            path: '/systemTina',
            meta:{
                title: '朕的后宫'
            },
            component: () => import('@/pages/admin/admin')
        },
        {
            path: '/error/404',
            meta:{
                title: '页面飞走了~'
            },
            component: () => import('@/pages/error/404')
        },
        { path: '*', redirect: '/error/404'}
        ]
    })
    