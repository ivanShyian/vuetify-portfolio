import axios from 'axios'
const URL = process.env.VUE_APP_FB_BASE

export default {
  namespaced: true,
  state() {
    return {
      stack: ['HTML', 'CSS, SASS & LESS', 'Javascript', 'ReactJS, React Native', 'Vue 2, Vuex, VueRouter, Vuetify', 'Vue 3, Option & Composition API']
    }
  },
  actions: {
    async loadLanguage(_, payload) {
      const { data } = await axios.get(`${URL}/owner.json`)
      console.log(data)
    }
  }
}
