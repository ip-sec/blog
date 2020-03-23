import { home } from '../../api/home'
const state = {
    id: 1
}

const mutations = {
    SET_ID: (state,id) => {
        state.id = id
    }
}

const actions = {
    home( {commit} ){
        return new Promise((resolve,reject)=>{
            home().then(()=>{
                commit('SET_ID',id)
                console.log(1)
                resolve()
            })
        }).catch((error)=>{
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