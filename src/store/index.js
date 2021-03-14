import Vue from 'vue'
import Vuex from 'vuex'
import languages from './modules/languages.module'

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
      ],
      projects: [
        {
          id: 0,
          name: 'fitbody',
          label: 'FitBody web-application',
          subText: 'Fitbody application that help people to gain, lose or keep weight and easily enabled to follow your diet',
          img: {
            first: 'fitbody/fitbody.png',
            second: 'fitbody/fitbody2.png',
            third: 'fitbody/fitbody3.png'
          },
          text: {
            projectText: 'This project was developed as a graduation project for the university. It is not completely ready at the moment, but from time to time I continue to write code. Nevertheless, looking at the fact that the application is not completely ready - at this stage there is an opportunity to interact with it.\n' +
              'This application includes things like:',
            projectTextList: ''
          }
        },
        {
          id: 1,
          name: 'store',
          label: 'Vue-Store',
          img: {
            first: 'vuestore/VueStore.png',
            second: 'vuestore/VueStore3.png',
            third: 'vuestore/VueStore4.png'
          },
          subText: 'Store where you can commit that has most of functionality like any other online-store'
        },
        {
          id: 2,
          name: 'starDB',
          label: 'Starwars API',
          img: {
            first: 'stardb/react-star-db.png'
          },
          subText: 'Web-dictionary of the Starwars universe'
        }
      ]
    }
  },
  getters: {
    socialFooter(state) {
      return state.social.filter(e => e.id >= 3 && e.id < 7)
    },
    social(state) {
      return state.social
    },
    projects(state) {
      return state.projects
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    languages
  }
})
