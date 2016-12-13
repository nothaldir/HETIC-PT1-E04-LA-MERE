import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    chapter: 1,
  },
  mutations: {
    changeChapter(state, { n }) {
      /* eslint-disable no-param-reassign */
      state.chapter = n
    },
  },
  actions: {
    increment: ({ commit }) => commit('increment'),
  },
})
