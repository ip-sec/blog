import { head, message, diary } from '../../api/home'
const state = {
    menu: null,//导航条
    message: null,//留言信息
    diary: null,//日志信息
    children: null,//页面子路由信息
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
}

export default {
    state,
    mutations,
    actions,
    namespaced: true
}