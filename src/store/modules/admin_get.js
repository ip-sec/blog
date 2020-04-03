import { photo, menu } from '../../api/admin'

const state = {
    menu: null,//菜单信息
    photo: null,//图片信息
    photo_class: null,//图片分类信息
}

const mutations = {
    SET_MENU: (state,menu) => {
        state.menu = menu
    },
    SET_PHOTO: (state,photo) => {
        state.photo = photo
    },
    SET_PHOTO_CLASS: (state,photo_class) => {
        state.photo_class = photo_class
    },
}

const actions = {
    
    menu( {commit} ){
        return new Promise((resolve,reject)=>{
            menu().then(response => {
                commit('SET_MENU',response.data)
                resolve()
            })
        }).catch(error => {
            reject(error)
        })
    },
    photo( {commit} ){
        return new Promise((resolve,reject)=>{
            photo().then(response => {
                commit('SET_PHOTO', response.data)
                commit('SET_PHOTO_CLASS',response.class)
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