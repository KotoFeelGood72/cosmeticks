// store/index.js

import Vue from 'vue'
import Vuex from 'vuex'

import bread from './modules/bread'

Vue.use(Vuex)

const createStore = () => {
  return new Vuex.Store({
    modules: {
      bread
    }
  })
}

export default createStore
