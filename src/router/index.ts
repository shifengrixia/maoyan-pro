import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/home/index.vue')
  },
  {
    path: '/cinema',
    name: 'cinema',
    component: () => import('../views/cinema/index.vue')
  },
  {
    path: '/mine',
    name: 'mine',
    component: () => import('../views/mine/index.vue')
  },
  {
    path: '/movie-detail',
    name: 'movieDetail',
    component: () => import('../views/movie-detail/index.vue')
  },
  {
    path: '/position',
    name: 'position',
    component: () => import('../views/position/index.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/user/Login.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/user/Register.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
