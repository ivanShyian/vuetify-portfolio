import axios from 'axios'

const URL = process.env.VUE_APP_FB_BASE
export default {
  namespaced: true,
  state() {
    return {
      statement: {}
    }
  },
  mutations: {
    setCurrentLang(state, payload) {
      localStorage.setItem(payload.lang, JSON.stringify(payload.variables))
    },
    setStatementData(state, payload) {
      state.statement = payload
    }
  },
  actions: {
    async loadLanguage({ commit }, payload) {
      try {
        const { data } = await axios.get(`${URL}/${payload}.json`)
        if (!data) throw new Error('Data doesn\'t exists')
        commit('setCurrentLang', { lang: payload, variables: data })
      } catch (e) {
        console.warn(e)
      }
    },
    async loadStatementData({ commit }) {
      try {
        const { data } = await axios.get(`${URL}/state.json`)
        if (!data) throw new Error('Data doesn\'t exists')
        commit('setStatementData', data)
      } catch (e) {
        console.warn(e)
      }
    }
  },
  getters: {
  }
}
