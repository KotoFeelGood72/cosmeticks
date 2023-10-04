export default {
  state: {
    breadcrumb: [],
  },
  mutations: {
    set(state, value) {
      state.breadcrumb = value;
    },
  },
  actions: {
    addBreadcrumb({ commit }, value) {
      commit('set', value);
    },
  },
  getters: {
    getBreadcrumb(state) {
      return state.breadcrumb;
    },
  }
}

