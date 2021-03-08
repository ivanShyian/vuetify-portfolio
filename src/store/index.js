import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state() {
    return {
      social: [
        { id: 0, name: 'Phone', icon: 'fas fa-phone-square', link: '+380937277205', type: 'phone' },
        { id: 1, name: 'Email', icon: 'fas fa-envelope', link: 'shyian.ivan@yahoo.com', type: 'email' },
        { id: 2, name: 'Linkedin', icon: 'fab fa-linkedin', link: 'https://www.linkedin.com/in/ivan-shyian', type: 'link' },
        { id: 3, name: 'GitHub', icon: 'fab fa-github', link: 'https://github.com/ivanShyian', type: 'link' },
        { id: 4, name: 'Telegram', icon: 'fab fa-telegram', link: 'https://t.me/vanjke', type: 'link' },
        { id: 5, name: 'Facebook', icon: 'fab fa-facebook', link: 'https://www.facebook.com/vanjkes', type: 'link' },
        { id: 6, name: 'Instagram', icon: 'fab fa-instagram', link: 'https://www.instagram.com/vanjkes', type: 'link' },
        { id: 7, name: 'CV (Resume)', icon: 'far fa-file-pdf', link: 'https://drive.google.com/file/d/1IWm-739OclG3yVJl_6WhdyKwkQ4FUcJZ/view?usp=sharing', type: 'link' }
      ]
    }
  },
  getters: {
    socialFooter(state) {
      return state.social.filter(e => e.id >= 3 && e.id < 7)
    },
    social(state) {
      return state.social
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
