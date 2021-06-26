export default {
  namespaced: true,
  state() {
    return {
      isLoading: true
    }
  },
  mutations: {
    changeLoadingStatus(state, status) {
      state.isLoading = status
    }
  },
  actions: {
    loadingStatusHandler({ commit }, status) {
      commit('changeLoadingStatus', status)
    }
  },
  getters: {
    loading: (state) => state.isLoading
  }
}
