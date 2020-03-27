const state = {
    dialogTableVisible: false,//日历插件显示
    openPage: false,
    drawer: false,
    trans: 'left',//路由切换过渡动画
    imgData: [
        { id: 1, url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg', srcList: ['https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
        'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg']},
        { id: 2, url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg', srcList: ['https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
        'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg']},
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
}

export default {
    state,
    mutations,
    actions,
    namespaced: true
}