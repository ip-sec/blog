import Vue from 'vue'
import Router from 'vue-router'

const layout = () => import('../components/layout/layoutPage')

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
                { path: '', meta:{ index: 1 }, component: () => import('@/pages/home/index') },
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
                { path: '', meta:{ index: 2 }, component: () => import('@/pages/tutorial/index') },
                { path: 'pages/:id', meta:{ index: 2 }, component: () => import('@/pages/home/listContent') }
            ]
        },
        {
            path: '/photo',
            meta:{
                index: 3
            },
            component: layout,
            children:[
                { path: '', meta:{ index: 3 }, component: () => import('@/pages/photo/index') }
            ]
        },
        {
            path: '/message',
            meta:{
                index: 4
            },
            component: layout,
            children:[
                { path: '', meta:{ index: 4 }, component: () => import('@/pages/message/index') }
            ]
        },
        {
            path: '/isme',
            meta:{
                index: 5
            },
            component: layout,
            children:[
                { path: '', meta:{ index: 5 }, component: () => import('@/pages/isme/index') }
            ]
        },
        {
            path: '/isTina',
            component: () => import('@/pages/admin/login')
        }, 
        {
            path: '/systemTina',
            component: () => import('@/pages/admin/admin')
        },
        {
            path: '/error/404',
            component: () => import('@/pages/error/404')
        },
        { path: '*', redirect: '/error/404'}
        ]
    })
    