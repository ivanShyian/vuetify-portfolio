import axios from 'axios'

export default {
  namespaced: true,
  state() {
    return {
      userProjects: [],
      userContacts: [],
      userStack: [],
      userStudy: []
    }
  },
  mutations: {
    setActualProjects(state, payload) {
      state.userProjects = []
      state.userProjects = [...payload]
    },
    setActualContacts(state, payload) {
      state.userContacts = []
      state.userContacts = [...payload]
    },
    setActualStack(state, payload) {
      state.userStack = []
      state.userStack = [...payload]
    },
    setActualStudy(state, payload) {
      const list = Object.keys(payload).map(el => {
        return {
          id: el,
          ...payload[el]
        }
      })
      state.userStudy = []
      state.userStudy = [...list]
    }
  },
  actions: {
    async loadStatementData({ commit }) {
      try {
        const { data } = await axios.get(`${process.env.VUE_APP_FB_BASE}/state.json`)
        if (!data) throw new Error('Data doesn\'t exists')
        commit('setActualProjects', data.projects)
        commit('setActualContacts', data.contacts)
        commit('setActualStack', data.stack)
        commit('setActualStudy', data.stydy)
      } catch (e) {
        console.warn(e)
      }
    }
  },
  getters: {
    projects(state) {
      return state.userProjects
    },
    contacts(state) {
      return state.userContacts
    },
    stack(state) {
      return state.userStack
    },
    study(state) {
      return state.userStudy
    },
    exactProject: state => link => {
      return state.userProjects.find(el => el.link === link)
    },
    socialFooter(state) {
      return state.userContacts.filter(e => e.id >= 3 && e.id < 7)
    }
  }
}
