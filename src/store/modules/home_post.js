import { saveMessage, updateDiary, updateTutorial } from '../../api/home'

const state = {

}

const mutations = {

}

const actions = {
    saveMessage( {commit},info ){
        return new Promise((resolve,reject)=>{
            const data = {
                message: info,
                avatar: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
                datetime: new Date().getTime()
            }
            saveMessage(data).then(response => {
                resolve()
            })
        }).catch(error => {
            reject(error)
        })
    },
    updateDiary( {commit}, params ){
        return new Promise((resolve,reject)=>{
            updateDiary(params).then(response => {
                params == '' ? commit('SET_DIARY',response.data) : commit('SET_CHILDREN',response.data)
                resolve()
            })
        }).catch(error => {
            reject(error)
        })
    },
    updateTutorial( {commit}, params ){
        return new Promise((resolve,reject)=>{
            updateTutorial(params).then(response => {
                params == '' || params.indexOf('?page=') > -1 ? commit('SET_TUTORIAL',response.data) : commit('SET_CHILDREN',response.data)
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