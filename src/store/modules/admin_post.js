import * as submit from '../../api/admin_commit'

const state = {

}

const mutations = {

}

const actions = {
    login ( {commit},data ){
        return new Promise((resolve,reject)=>{
            submit.login(data).then(response => {
                resolve()
            }).catch(error => {
                reject(error)
            })
        })
    },
    saveTutorial ( {commit},data ){
        return new Promise((resolve,reject)=>{
            submit.saveTutorial(data).then(response => {
                resolve()
            }).catch(error => {
                reject(error)
            })
        })
    },
    saveDiary ( {commit},data ){
        return new Promise((resolve,reject)=>{
            submit.saveDiary(data).then(response => {
                resolve()
            }).catch(error => {
                reject(error)
            })
        })
    },
    updateTutorial ( {commit},data ){
        let params = data.id
        return new Promise((resolve,reject)=>{
            submit.updateTutorial(params,data).then(response => {
                resolve()
            }).catch(error => {
                reject(error)
            })
        })
    },
    updateDiary ( {commit},data ){
        let params = data.id
        return new Promise((resolve,reject)=>{
            submit.updateDiary(params,data).then(response => {
                resolve()
            }).catch(error => {
                reject(error)
            })
        })
    },
    savePhoto ( {commit},data ){
        return new Promise((resolve,reject)=>{
            submit.savePhoto(data).then(response => {
                resolve()
            }).catch(error => {
                reject(error)
            })
        })
    },
    saveSort ( {commit},data ){
        return new Promise((resolve,reject)=>{
            submit.saveSort(data).then(response => {
                resolve()
            }).catch(error => {
                reject(error)
            })
        })
    },
    saveCategory ( {commit},data ){
        return new Promise((resolve,reject)=>{
            submit.saveCategory(data).then(response => {
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
    },
    updateSort ( {commit},info ){
        let id = info.id
        return new Promise((resolve,reject)=>{
            submit.updateSort(id,info).then(response => {
                resolve()
            }).catch(error => {
                reject(error)
            })
        })
    },
    updateCategory ( {commit},info ){
        let id = info.id
        return new Promise((resolve,reject)=>{
            submit.updateCategory(id,info).then(response => {
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