export default {
  state: () => ({
    searchValue: '',
  }),
  actions: {
    // Здесь вы можете определить действия, если они понадобятся.
  },
  mutations: {
    updateSearchValue(state, value) {
      state.searchValue = value;
    },
  },
  getters: {
    // Здесь вы можете определить геттеры, если они понадобятся.
  }
}
