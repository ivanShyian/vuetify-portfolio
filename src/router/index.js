import Vue from 'vue'
import VueRouter from 'vue-router'
import i18n from '@/plugins/i18n'

Vue.use(VueRouter)

function load(component) {
  return () => import(`../views/${component}.vue`)
}

const routes = [
  {
    path: '/:locale',
    component: {
      template: '<router-view></router-view>'
    },
    beforeEnter: (to, from, next) => {
      const locale = to.params.locale
      const supportedLocales = process.env.VUE_APP_I18N_SUPPORTED_LOCALE.split(',')

      if (!supportedLocales.includes(locale)) {
        return next('en')
      }
      if (i18n.locale !== locale) {
        i18n.locale = locale
      }
      return next()
    },
    children: [{
      path: '',
      name: 'About',
      component: load('About')
    },
    {
      path: '/:locale/projects',
      name: 'Projects',
      component: load('Projects')
    },
    {
      path: '/:locale/study',
      name: 'Study',
      component: load('Study')
    },
    {
      path: '/:locale/contacts',
      name: 'Contacts',
      component: load('Contacts')

    },
    {
      path: '/:locale/project/:id?',
      name: 'Project',
      component: load('Project')
    }]
  },
  {
    path: '*',
    redirect() {
      return process.env.VUE_APP_I18N_LOCALE
    }
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
