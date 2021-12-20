import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Food from '../views/Food.vue'
import Recycling from '../views/Recycling.vue'
import { initiativeTypeOne, initiativeTypeTwo } from "../../config";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/fooddeals',
    name: initiativeTypeOne,
    component: Food
  },
  {
    path: '/recycling',
    name: initiativeTypeTwo,
    component: Recycling
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})
router.afterEach(() => {
  NProgress.done()
})

export default router
