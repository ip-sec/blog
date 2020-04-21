const state = {
    dialogTableVisible: false,//日历插件显示
    openPage: false,//切换背景
    drawer: false,//遮罩层
    trans: 'left',//路由切换过渡动画
    showMusic: false,//小屏幕下的音乐播放
    bgImg: [
        { id: 1, imgUrl: require('@/assets/img/layout-img-1.jpg')},
        { id: 2, imgUrl: require('@/assets/img/layout-img-2.jpg')},
        { id: 3, imgUrl: require('@/assets/img/layout-img-3.jpg')},
        { id: 4, imgUrl: require('@/assets/img/layout-img-4.jpg')},
        { id: 5, imgUrl: require('@/assets/img/layout-img-5.jpg')}
    ],//页面背景图
    siteDiary: '',//日志过滤条件
    counts:{
        tutorial_num: 0,//查看数量
        diary_num: 0,//查看数量
        message_num: 0,//查看数量
        photo_num: 0,//查看数量
        isme_num: 0,//查看数量
        datetime: new Date().toLocaleDateString()
    }
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
    SET_SITEDIARY: ( state,data ) => {
        state.siteDiary = data
    },
    SET_TUTORIALNUM: ( state ) => {
        state.counts.tutorial_num += 1
    },
    SET_DIARYNUM: ( state ) => {
        state.counts.diary_num += 1
    },
    SET_MESSAGENUM: ( state ) => {
        state.counts.message_num += 1
    },
    SET_PHOTONUM: ( state ) => {
        state.counts.photo_num += 1
    },
    SET_ISMENUM: ( state ) => {
        state.counts.isme_num += 1
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
    siteDiary ( {commit},data ) {
        commit('SET_SITEDIARY',data)
    },
    tutorialNum ( {commit} ) {
        commit('SET_TUTORIALNUM')
    },
    diaryNum ( {commit} ) {
        commit('SET_DIARYNUM')
    },
    messageNum ( {commit} ) {
        commit('SET_MESSAGENUM')
    },
    photoNum ( {commit} ) {
        commit('SET_PHOTONUM')
    },
    ismeNum ( {commit} ) {
        commit('SET_ISMENUM')
    },
}

export default {
    state,
    mutations,
    actions,
    namespaced: true
}