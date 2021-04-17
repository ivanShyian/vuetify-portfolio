import axios from 'axios'

export default {
  namespaced: true,
  mutations: {
    setCurrentLang(state, payload) {
      localStorage.setItem(payload.lang, JSON.stringify(payload.variables))
    }
  },
  actions: {
    async loadLanguage({ commit, dispatch }, payload) {
      try {
        const { data } = await axios.get(`${process.env.VUE_APP_FB_BASE}/${payload}.json`)
        if (!data) throw new Error('Data doesn\'t exists')
        commit('setCurrentLang', { lang: payload, variables: data })
      } catch (e) {
        console.warn(e)
      }
    }
  }
}
