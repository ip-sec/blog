const admin = {
    path: '/systemTina',
    meta:{
        title: '朕的后宫',
        isToken: true
    },
    component: () => import('@/admin/admin'),
    children:[
        {   path: '',
            meta:{
                title: '首页',
                isToken: true
            },
            component: () => import('@/admin/pages/Home/index'),
        },
        {   path: 'tutorialAlbum', 
            component: () => import('@/admin/pages/Layout/index'),
            children:[
                {
                    path: '',
                    component: () => import('@/admin/pages/Tutorial/index'),
                    meta:{
                        title: '教程管理',
                        breadcrumb: ['教程管理'],
                        isToken: true
                    },
                }
            ]
        },
        {   path: 'diaryAlbum', 
            component: () => import('@/admin/pages/Layout/index'),
            children:[
                {
                    path: '',
                    component: () => import('@/admin/pages/Diary/index'),
                    meta:{
                        title: '日志管理',
                        breadcrumb: ['日志管理'],
                        isToken: true
                    },
                }
            ]
        },
        {   path: 'photoAlbum', 
            meta:{
                title: '相册管理',
                isToken: true
            },
            component: () => import('@/admin/pages/Layout/index'),
            children:[
                {
                    path: '',
                    component: () => import('@/admin/pages/Photo/index'),
                    meta:{
                        title: '相册管理',
                        breadcrumb: ['相册管理'],
                        isToken: true
                    },
                },
                {
                    path: 'upload',
                    component: () => import('@/admin/pages/Photo/upload'),
                    meta:{
                        title: '上传照片',
                        breadcrumb: ['相册管理','上传照片'],
                        isToken: true
                    },
                }
            ]
        },
        {   path: 'messageAlbum', 
            component: () => import('@/admin/pages/Layout/index'),
            children:[
                {
                    path: '',
                    component: () => import('@/admin/pages/Message/index'),
                    meta:{
                        title: '留言管理',
                        breadcrumb: ['留言管理'],
                        isToken: true
                    },
                }
            ]
        },
        {   path: 'sortAlbum', 
            component: () => import('@/admin/pages/Layout/index'),
            children:[
                {
                    path: '',
                    component: () => import('@/admin/pages/Sort/index'),
                    meta:{
                        title: '标签管理',
                        breadcrumb: ['标签管理'],
                        isToken: true
                    },
                },
                {
                    path: 'category',
                    component: () => import('@/admin/pages/Sort/category'),
                    meta:{
                        title: '分类管理',
                        breadcrumb: ['标签管理','分类管理'],
                        isToken: true
                    },
                }
            ]
        },
    ]
}

export default admin