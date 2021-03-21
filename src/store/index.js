import Vue from 'vue'
import form from './modules/form'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    form,
  }
})
