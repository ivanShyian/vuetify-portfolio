import Vue from 'vue'
import Vuex from 'vuex'
import languages from './modules/languages.module'
import statement from './modules/statement.module'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    languages,
    statement
  }
})
