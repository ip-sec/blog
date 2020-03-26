import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import home from './modules/home'
import common from './modules/common'

Vue.use(Vuex)

export default new Vuex.Store({
    getters,
    modules:{
        common,
        home,
    }
})