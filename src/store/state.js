const state = {
    dialogTableVisible: false,//日历插件显示
    openPage: false,
    drawer: false,
    trans: 'left',
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
    ]

}

export default state