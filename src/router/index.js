import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: ()=> import(/* webpackChunkName: "home" */ '@/views/home.vue')
  },
//   {
//     path: '*',
//     component: ()=> import(/* webpackChunkName: "404" */ '@/components/page_404.vue')
//   }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
