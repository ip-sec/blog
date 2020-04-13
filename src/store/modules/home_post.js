import * as handle from '../../api/home_handle'

const state = {

}

const mutations = {

}

const actions = {
    saveMessage( {commit},info ){
        return new Promise((resolve,reject)=>{
            handle.saveMessage(info).then(response => {
                resolve()
            }).catch(error => {
                reject(error)
            })
        })
    },
    updateDiary( {commit}, info ){
        const id = info.id
        const data = {}
        info.like_num ? data.like_num = info.like_num : ''
        info.view_num ? data.view_num = info.view_num : ''
        return new Promise((resolve,reject)=>{
            handle.updateDiary(id, data).then(response => {
                resolve()
            }).catch(error => {
                reject(error)
            })
        })
    },
    updateTutorial( {commit}, info ){
        const id = info.id
        const data = {}
        info.like_num ? data.like_num = info.like_num : ''
        info.view_num ? data.view_num = info.view_num : ''
        return new Promise((resolve,reject)=>{
            handle.updateTutorial(id, data).then(response => {
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