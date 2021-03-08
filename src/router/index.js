import Vue from 'vue'
import VueRouter from 'vue-router'
import About from '../views/About.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'About',
    component: About
  },
  {
    path: '/projects',
    name: 'Projects',
    component: () => import('../views/Projects')
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
