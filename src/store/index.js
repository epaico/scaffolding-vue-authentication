import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    url_api : 'http://localhost:3000/api'
  },
  mutations: {

  },
  actions: {
  },
  modules: {
    auth
  }
})
