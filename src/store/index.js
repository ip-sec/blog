import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import home_get from './modules/home_get'
import home_post from './modules/home_post'
import common from './modules/common'

Vue.use(Vuex)

export default new Vuex.Store({
    getters,
    modules:{
        common,
        home_get,
        home_post,
    }
})