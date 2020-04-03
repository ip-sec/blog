const admin = {
    path: '/systemTina',
    meta:{
        title: '朕的后宫'
    },
    component: () => import('@/admin/admin'),
    children:[
        {   path: '', 
            component: () => import('@/admin/components/Home/index'),
        },
        {   path: 'photoAlbum', 
            component: () => import('@/admin/components/Layout/index'),
            children:[
                {
                    path: '',
                    component: () => import('@/admin/components/Photo-Album/index'),
                    meta:{
                        breadcrumb: ['相册管理']
                    },
                },
                {
                    path: 'upload',
                    component: () => import('@/admin/components/Photo-Album/upload'),
                    meta:{
                        breadcrumb: ['相册管理','上传照片']
                    },
                }
            ]
        },
    ]
}

export default admin