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
        let data = {
            name: info.name,
            bg: info.bg
        }
        return new Promise((resolve,reject)=>{
            submit.updateSort(id,data).then(response => {
                resolve()
            }).catch(error => {
                reject(error)
            })
        })
    },
    updateCategory ( {commit},info ){
        let id = info.id
        let data = {
            name: info.name
        }
        return new Promise((resolve,reject)=>{
            submit.updateCategory(id,data).then(response => {
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