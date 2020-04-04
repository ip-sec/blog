import * as admin from '../../api/admin'
import * as handle from '../../api/admin_handle'

const state = {
    menu: null,//菜单信息
    photo: null,//图片信息
    message: null,//留言信息
    photo_class: null,//图片分类信息
    sort: null,//分类信息
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
    SET_MESSAGE: (state,message) => {
        state.message = message
    },
    SET_SORT: (state,sort) => {
        state.sort = sort
    },
}

const actions = {
    
    menu( {commit} ){
        return new Promise((resolve,reject)=>{
            admin.menu().then(response => {
                commit('SET_MENU',response.data)
                resolve()
            }).catch(error => {
                reject(error)
            })
        })
    },
    photo( {commit} ){
        return new Promise((resolve,reject)=>{
            admin.photo().then(response => {
                commit('SET_PHOTO', response.data)
                commit('SET_PHOTO_CLASS',response.class)
                resolve()
            }).catch(error => {
                reject(error)
            })
        })
    },
    photoCategory( {commit} ){
        return new Promise((resolve,reject)=>{
            admin.photoCategory().then(response => {
                commit('SET_PHOTO_CLASS',response.data)
                resolve()
            }).catch(error => {
                reject(error)
            })
        })
    },
    sort( {commit} ){
        return new Promise((resolve,reject)=>{
            admin.sort().then(response => {
                commit('SET_SORT',response.data)
                resolve()
            }).catch(error => {
                reject(error)
            })
        })
    },
    delPhoto( {commit},id ){
        return new Promise((resolve,reject)=>{
            handle.delPhoto(id).then(response => {
                resolve()
            }).catch(error => {
                reject(error)
            })
        })
    },
    message( {commit} ){
        return new Promise((resolve,reject)=>{
            admin.message().then(response => {
                commit('SET_MESSAGE',response.data)
                resolve()
            }).catch(error => {
                reject(error) 
            })
        })
    },
    delMessage( {commit},id ){
        return new Promise((resolve,reject)=>{
            handle.delMessage(id).then(response => {
                resolve()
            }).catch(error => {
                reject(error)
            })
        })
    },
    delSort( {commit},id ){
        return new Promise((resolve,reject)=>{
            handle.delSort(id).then(response => {
                resolve()
            }).catch(error => {
                reject(error)
            })
        })
    },
    resetCache( {commit} ){
        return new Promise((resolve,reject)=>{
            handle.resetCache().then(response => {
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