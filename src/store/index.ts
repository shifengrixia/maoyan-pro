import Vue from 'vue'
import Vuex from 'vuex'
import userModule from './user'
import homeModule from './home'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    userModule,
    homeModule
  }
})
