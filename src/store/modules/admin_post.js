import * as submit from '../../api/admin_commit'

const state = {

}

const mutations = {

}

const actions = {
    savePhoto ( {commit},data ){
        return new Promise((resolve,reject)=>{
            submit.savePhoto(data).then(response => {
                resolve()
            }).catch(error => {
                reject(error)
            })
        })
    },

    delPhotoFile ( {commit},data ){
        return new Promise((resolve,reject)=>{
            submit.delPhotoFile(data).then(response => {
                resolve()
            }).catch(error => {
                reject(error)
            })
        })
    }
}

export default {
    state,
    mutations,
    actions,
    namespaced: true
}