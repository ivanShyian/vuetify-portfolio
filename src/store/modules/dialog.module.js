export default {
  namespaced: true,
  state() {
    return {
      dialog: false
    }
  },
  mutations: {
    setShowDialogValue(state, value) {
      state.dialog = value
    }
  },
  actions: {
    changeProtectionDialogStatus({ commit }, payload) {
      commit('setShowDialogValue', payload)
    }
  },
  getters: {
    isShowedDialog: (state) => state.dialog
  }
}
