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
    updateDiary( {commit}, info ){
        const id = info.id
        const data = {}
        info.like_num ? data.like_num = info.like_num : ''
        info.view_num ? data.view_num = info.view_num : ''
        return new Promise((resolve,reject)=>{
            updateDiary(id, data).then(response => {
                resolve()
            })
        }).catch(error => {
            reject(error)
        })
    },
    updateTutorial( {commit}, info ){
        const id = info.id
        const data = {}
        info.like_num ? data.like_num = info.like_num : ''
        info.view_num ? data.view_num = info.view_num : ''
        return new Promise((resolve,reject)=>{
            updateTutorial(id, data).then(response => {
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