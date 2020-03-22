const state = {
    dialogTableVisible: false,//日历插件显示
    activeIndex: '1',//监听路由切换后改变导航状态
    openPage: false,
    drawer: false,
    trans: 'left',
    isPageNum: 0,
    menu:[
        { key: 1, name: '教程', linkto: '/home' },
        { key: 2, name: '日志', linkto: '/tutorial'},
        { key: 3, name: '相册', linkto: '/photo' },
        { key: 4, name: '留言', linkto: '/message' },
        { key: 5, name: '关于', linkto: '/isme' }
    ],//导航条
    imgData: [
        { id: 1, url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg', srcList: ['https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
        'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg']},
        { id: 2, url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg', srcList: ['https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
        'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg']},
    ],
    itemData:[
        { id: 1, imgUrl: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg', itemFont: '这是我的教程space-between', title: '标题', upDate: '2020.2.2' },
        { id: 2, imgUrl: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg', itemFont: '这是我的教程space-between', title: '标题', upDate: '2020.2.2' },
        { id: 3, imgUrl: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg', itemFont: '这是我的教程space-between', title: '标题', upDate: '2020.2.2' },
        { id: 4, imgUrl: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg', itemFont: '这是我的教程space-between', title: '标题', upDate: '2020.2.2' },
        { id: 5, imgUrl: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg', itemFont: '这是我的教程space-between', title: '标题', upDate: '2020.2.2' },
        { id: 6, imgUrl: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg', itemFont: '这是我的教程space-between', title: '标题', upDate: '2020.2.2' },
        // { id: 7, imgUrl: require('@/assets/img/logo.png'), itemFont: '这是我的教程space-between', title: '标题', upDate: '2020.2.2' },
        // { id: 8, imgUrl: require('@/assets/img/logo.png'), itemFont: '这是我的教程space-between', title: '标题', upDate: '2020.2.2' },
        // { id: 9, imgUrl: require('@/assets/img/logo.png'), itemFont: '这是我的教程space-between', title: '标题', upDate: '2020.2.2' },
    ],
    timeData: [
        { id: 1, dateTime: new Date().toLocaleDateString(), title: '发布说说', context: '这是一篇文章'},
        { id: 2, dateTime: new Date().toLocaleDateString(), title: '发布说说', context: '这是一篇文章'},
        { id: 3, dateTime: new Date().toLocaleDateString(), title: '发布说说', context: '这是一篇文章'},
        { id: 4, dateTime: new Date().toLocaleDateString(), title: '发布说说', context: '这是一篇文章'},
        { id: 5, dateTime: new Date().toLocaleDateString(), title: '发布说说', context: '这是一篇文章'},
        { id: 6, dateTime: new Date().toLocaleDateString(), title: '发布说说', context: '这是一篇文章'}
    ],
    bgImg: [
        { id: 1, imgUrl: require('@/assets/img/layout-img-1.jpg')},
        { id: 2, imgUrl: require('@/assets/img/layout-img-2.jpg')},
        { id: 3, imgUrl: require('@/assets/img/layout-img-3.jpg')},
        { id: 4, imgUrl: require('@/assets/img/layout-img-4.jpg')},
        { id: 5, imgUrl: require('@/assets/img/layout-img-5.jpg')}
    ],
    infoItem: [
        { id: 1, imgUrl: '', context: '我是美食家sssssssss' },
        { id: 2, imgUrl: '', context: '我是美食家' },
        { id: 3, imgUrl: '', context: '我是美食家' },
        { id: 4, imgUrl: '', context: '我是美食家' },
        { id: 5, imgUrl: '', context: '我是美食家' },
        { id: 6, imgUrl: '', context: '我是美食家' },
        { id: 7, imgUrl: '', context: '我是美食家' },
        { id: 8, imgUrl: '', context: '我是美食家' },
        { id: 9, imgUrl: '', context: '我是美食家我是美食家我是美食家我是美食家我是美食家我是美食家我是美食家' },
        { id: 10, imgUrl: '', context: '我是美食家' },
        { id: 11, imgUrl: '', context: '我是美食家' },
        { id: 12, imgUrl: '', context: '我是美食家' },
        { id: 13, imgUrl: '', context: '我是美食家' },
        { id: 14, imgUrl: '', context: '我是美食家' },
        { id: 15, imgUrl: '', context: '我是美食家' },
        { id: 16, imgUrl: '', context: '我是美食家' },
    ]

}

export default state