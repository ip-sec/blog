import { head, message } from '../../api/home'
const state = {
    menu: null,//导航条
    message: null,//留言信息
}

const mutations = {
    SET_MENU: (state,menu) => {
        state.menu = menu
    },
    SET_MESSAGE: (state,message) => {
        state.message = message
    }
}

const actions = {
    menuFun( {commit} ){
        return new Promise((resolve,reject)=>{
            head().then(response => {
                commit('SET_MENU',response.data)
                resolve()
            })
        }).catch(error => {
            reject(error)
        })
    },
    messageFun( {commit} ){
        return new Promise((resolve,reject)=>{
            message().then(response => {
                commit('SET_MESSAGE',response.data)
                resolve()
            })
        }).catch(error => {
            reject(error)
        })
    }
}

export default {
    state,
    mutations,
    actions,
    namespaced: true
}