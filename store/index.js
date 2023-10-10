// store/index.js

import Vue from 'vue'
import Vuex from 'vuex'

import bread from './modules/bread'
import search from './modules/search'

Vue.use(Vuex)

const createStore = () => {
  return new Vuex.Store({
    modules: {
      bread,
      search
    }
  })
}

export default createStore
