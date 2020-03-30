const state = {
    dialogTableVisible: false,//日历插件显示
    openPage: false,//切换背景
    drawer: false,//遮罩层
    trans: 'left',//路由切换过渡动画
    showMusic: false,//小屏幕下的音乐播放
    imgData_hp: [
        { id: 1, url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'},
        { id: 2, url: 'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg'},
        { id: 3, url: 'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg'},
        { id: 4, url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'}, 
        { id: 5, url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'},
        { id: 6, url: 'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg'},
        { id: 7, url: 'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg'},
    ],
    imgData_bg: [
        { id: 1, url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'},
        { id: 2, url: 'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg'},
        { id: 3, url: 'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg'},
        { id: 4, url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'}, 
    ],
    imgData_wp: [
        { id: 1, url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'},
        { id: 2, url: 'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg'},
        { id: 3, url: 'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg'},
        { id: 4, url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'}, 
        { id: 5, url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'},
    ],
    bgImg: [
        { id: 1, imgUrl: require('@/assets/img/layout-img-1.jpg')},
        { id: 2, imgUrl: require('@/assets/img/layout-img-2.jpg')},
        { id: 3, imgUrl: require('@/assets/img/layout-img-3.jpg')},
        { id: 4, imgUrl: require('@/assets/img/layout-img-4.jpg')},
        { id: 5, imgUrl: require('@/assets/img/layout-img-5.jpg')}
    ],//页面背景图
}

const mutations = {
    SET_OPENPAGE: ( state ) => {
        state.openPage = !state.openPage
    },
    SET_DRAWER: ( state,drawer ) => {
        state.drawer = drawer
    },
    SET_DIALOG: ( state ) => {
        state.dialogTableVisible = true
    },
    SET_TRANS: ( state,trans ) => {
        state.trans = trans
    },
    SET_MUSIC: ( state,showMusic ) => {
        state.showMusic = showMusic
    },
}

const actions = {
    openPage ( {commit} ) {
        commit('SET_OPENPAGE')
    },
    drawer ( {commit},drawer ) {
        commit('SET_DRAWER',drawer)
    },
    dialog ( {commit} ) {
        commit('SET_DIALOG')
    },
    trans ( {commit},trans ) {
        commit('SET_TRANS',trans)
    },
    music ( {commit},music ) {
        commit('SET_MUSIC',music)
    },
}

export default {
    state,
    mutations,
    actions,
    namespaced: true
}