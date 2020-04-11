const state = {
    dialogTableVisible: false,//日历插件显示
    openPage: false,//切换背景
    drawer: false,//遮罩层
    trans: 'left',//路由切换过渡动画
    showMusic: false,//小屏幕下的音乐播放
    isTop: 'right',//tab切换
    listInfo: null,//编辑信息
    listData: null,//编辑信息
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
    SET_TOP: ( state,isTop ) => {
        state.isTop = isTop
    },
    SET_INFO: ( state,listInfo ) => {
        state.listInfo = listInfo
    },
    SET_DATA: ( state,listData ) => {
        state.listData = listData
    }
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
    isTop ( {commit},isTop ) {
        commit('SET_TOP',isTop)
    },
    listInfo ( {commit},info ){
        commit('SET_INFO',info)
    },
    listData ( {commit},data ){
        commit('SET_DATA',data)
    }
}

export default {
    state,
    mutations,
    actions,
    namespaced: true
}