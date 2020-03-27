import { head, message, diary, tutorial } from '../../api/home'
// import * as api from '../../api/home'
const state = {
    menu: null,//导航条
    message: null,//留言信息
    diary: null,//日志信息
    children: null,//页面子路由信息
    tutorial: null,//教程信息
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
}

const actions = {
    menu( {commit} ){
        return new Promise((resolve,reject)=>{
            head().then(response => {
                commit('SET_MENU',response.data)
                resolve()
            })
        }).catch(error => {
            reject(error)
        })
    },
    message( {commit} ){
        return new Promise((resolve,reject)=>{
            message().then(response => {
                commit('SET_MESSAGE',response.data)
                resolve()
            })
        }).catch(error => {
            reject(error)
        })
    },
    diary( {commit}, params ){
        return new Promise((resolve,reject)=>{
            diary(params).then(response => {
                params == '' ? commit('SET_DIARY',response.data) : commit('SET_CHILDREN',response.data)
                resolve()
            })
        }).catch(error => {
            reject(error)
        })
    },
    tutorial( {commit}, params ){
        return new Promise((resolve,reject)=>{
            tutorial(params).then(response => {
                if(params == '' || params.indexOf('?page=') > -1){
                    commit('SET_TUTORIAL',response.data)
                    commit('SET_PAGE',Math.ceil(response.data.total/response.data.per_page))
                    commit('SET_SIZE',response.data.per_page)
                    commit('SET_TOTAL',response.data.total)
                }else{
                    commit('SET_CHILDREN',response.data)
                }
                resolve()
            })
        }).catch(error => {
            reject(error)
        })
    },
}

export default {
    state,
    mutations,
    actions,
    namespaced: true
}