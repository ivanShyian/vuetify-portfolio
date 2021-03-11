import Vue from 'vue'
import VueRouter from 'vue-router'
import { Trans } from '@/plugins/translation'

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
    beforeEnter: Trans.routeMiddleware,
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
      return Trans.defaultLocale
    }
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
