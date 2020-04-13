import * as home from '../../api/home'
// import * as api from '../../api/home'
const state = {
    menu: null,//导航条
    message: null,//留言信息
    diary: null,//日志信息
    children: null,//页面子路由信息
    tutorial: null,//教程信息
    tutorialAbout: null,//教程信息
    photo: null,//图片信息
    photo_class: null,//图片分类信息
    page: 1,//当前分页信息
    size: 6,//分页显示条数
    total: 6,//总条数
}

const mutations = {
    SET_MENU: (state,menu) => {
        state.menu = menu
    },
    SET_MESSAGE: (state,message) => {
        state.message = message
    },
    SET_DIARY: (state,diary) => {
        state.diary = diary
    },
    SET_CHILDREN: (state,children) => {
        state.children = children
    },
    SET_TUTORIAL: (state,tutorial) => {
        state.tutorial = tutorial
    },
    DEL_TUTORIAL: (state) => {
        state.tutorial = []
    },
    DEL_CHILDREN: (state) => {
        state.children = null
    },
    SET_PAGE: (state,page) => {
        state.page = page
    },
    SET_TOTAL: (state,total) => {
        state.total = total
    },
    SET_SIZE: (state,size) => {
        state.size = size
    },
    SET_PHOTO: (state,photo) => {
        state.photo = photo
    },
    SET_PHOTO_CLASS: (state,photo_class) => {
        state.photo_class = photo_class
    },
    SET_TUTORIALABOUT: (state,tutorialAbout) => {
        state.tutorialAbout = tutorialAbout
    },
}

const actions = {
    delTutorial( {commit} ){
        commit('DEL_TUTORIAL')
    },
    delChildren( {commit} ){
        commit('DEL_CHILDREN')
    },
    menu( {commit} ){
        return new Promise((resolve,reject)=>{
            home.head().then(response => {
                commit('SET_MENU',response.data)
                resolve()
            }).catch(error => {
                reject(error)
            })
        })
    },
    message( {commit} ){
        return new Promise((resolve,reject)=>{
            home.message().then(response => {
                commit('SET_MESSAGE',response.data)
                resolve()
            }).catch(error => {
                reject(error)
            })
        })
    },
    diary( {commit}, params ){
        return new Promise((resolve,reject)=>{
            home.diary(params).then(response => {
                params == '' ? commit('SET_DIARY',response.data) : commit('SET_CHILDREN',response.data)
                resolve()
            }).catch(error => {
                reject(error)
            })
        })
    },
    tutorial( {commit}, params ){
        return new Promise((resolve,reject)=>{
            home.tutorial(params).then(response => {
                if(params == '' || params.indexOf('?page=') > -1){
                    response.class.forEach((item)=>{
                        item.datetime = new Date(parseInt(item.datetime)).toLocaleDateString()
                    })
                    commit('SET_TUTORIAL',response.data)
                    commit('SET_TUTORIALABOUT',response.class)
                    commit('SET_SIZE',response.data.per_page)
                    commit('SET_TOTAL',response.data.total)
                    commit('SET_PAGE',response.data.current_page)
                }else{
                    commit('SET_CHILDREN',response.data)
                }
                resolve()
            }).catch(error => {
                reject(error)
            })
        })
    },
    photo( {commit} ){
        return new Promise((resolve,reject)=>{
            home.photo().then(response => {
                commit('SET_PHOTO', response.data)
                commit('SET_PHOTO_CLASS',response.class)
                resolve()
            }).catch(error => {
                reject(error)
            })
        })
    },
}

export default {
    state,
    mutations,
    actions,
    namespaced: true
}