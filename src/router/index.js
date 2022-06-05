import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/NewLibro',
    name: 'NewLibro',
    component: () => import("../views/NewLibro.vue"),
  },
  {
    path: '/ListUsuarios',
    name: 'ListUsuarios',
    component: () => import("../views/ListUsuarios.vue"),
  },
  {
    path: '/NewUser',
    name: 'NewUser',
    component: () => import("../views/NewUser.vue"),
  },
  {
    path: '/ListLoan',
    name: 'ListLoan',
    component: () => import("../views/ListLoan.vue"),
  },
  {
    path: '/NewLoan',
    name: 'NewLoan',
    component: () => import("../views/NewLoan.vue"),
  },
  {
    path: '/ListDevolucion',
    name: 'ListDevolucion',
    component: () => import("../views/ListDevolucion.vue"),
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
