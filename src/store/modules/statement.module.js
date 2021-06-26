import axios from 'axios'

export default {
  namespaced: true,
  state() {
    return {
      userProjects: [],
      userContacts: [],
      userStack: {},
      userStudy: []
    }
  },
  mutations: {
    setActualProjects(state, payload) {
      state.userProjects = [...payload]
    },
    setActualContacts(state, payload) {
      state.userContacts = [...payload]
    },
    setActualStack(state, payload) {
      console.log(payload)
      state.userStack = payload
    },
    setActualStudy(state, payload) {
      const list = Object.keys(payload).map(el => {
        return {
          id: el,
          ...payload[el]
        }
      })
      state.userStudy = [...list]
    }
  },
  actions: {
    async loadStatementData({ commit, dispatch }) {
      try {
        const { data } = await axios.get(`${process.env.VUE_APP_FB_BASE}/state.json`)
        if (!data) throw new Error('Data doesn\'t exists')
        commit('setActualProjects', data.projects)
        commit('setActualContacts', data.contacts)
        commit('setActualStack', data.stack)
        commit('setActualStudy', data.stydy) // :)))
        dispatch('loader/loadingStatusHandler', false, { root: true })
        console.log({ data })
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
