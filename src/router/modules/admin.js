const admin = {
    path: '/systemTina',
    meta:{
        title: '朕的后宫'
    },
    component: () => import('@/admin/admin'),
    children:[
        {   path: '',
            meta:{
                title: '首页'
            },
            component: () => import('@/admin/components/Home/index'),
        },
        {   path: 'tutorialAlbum', 
            component: () => import('@/admin/components/Layout/index'),
            children:[
                {
                    path: '',
                    component: () => import('@/admin/components/Tutorial/index'),
                    meta:{
                        title: '教程管理',
                        breadcrumb: ['教程管理']
                    },
                }
            ]
        },
        {   path: 'diaryAlbum', 
            component: () => import('@/admin/components/Layout/index'),
            children:[
                {
                    path: '',
                    component: () => import('@/admin/components/Diary/index'),
                    meta:{
                        title: '日志管理',
                        breadcrumb: ['日志管理']
                    },
                }
            ]
        },
        {   path: 'photoAlbum', 
            meta:{
                title: '相册管理'
            },
            component: () => import('@/admin/components/Layout/index'),
            children:[
                {
                    path: '',
                    component: () => import('@/admin/components/Photo/index'),
                    meta:{
                        title: '相册管理',
                        breadcrumb: ['相册管理']
                    },
                },
                {
                    path: 'upload',
                    component: () => import('@/admin/components/Photo/upload'),
                    meta:{
                        title: '上传照片',
                        breadcrumb: ['相册管理','上传照片']
                    },
                }
            ]
        },
        {   path: 'messageAlbum', 
            component: () => import('@/admin/components/Layout/index'),
            children:[
                {
                    path: '',
                    component: () => import('@/admin/components/Message/index'),
                    meta:{
                        title: '留言管理',
                        breadcrumb: ['留言管理']
                    },
                }
            ]
        },
        {   path: 'sortAlbum', 
            component: () => import('@/admin/components/Layout/index'),
            children:[
                {
                    path: '',
                    component: () => import('@/admin/components/Sort/index'),
                    meta:{
                        title: '标签管理',
                        breadcrumb: ['标签管理']
                    },
                },
                {
                    path: 'category',
                    component: () => import('@/admin/components/Sort/category'),
                    meta:{
                        title: '分类管理',
                        breadcrumb: ['标签管理','分类管理']
                    },
                }
            ]
        },
    ]
}

export default admin