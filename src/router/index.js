import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/components/Welcome'
import Summoners from '@/components/summoners/Summoners'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Welcome',
      order: 1,
      component: Welcome
    },
    {
      path: '/summoners',
      name: 'Summoners',
      order: 2,
      component: Summoners
    },
    {
      path: '/champions',
      name: 'Champions',
      order: 3
    },
    {
      path: '/spectate',
      name: 'Spectate',
      order: 4
    }
  ],
  linkExactActiveClass: 'is-active'
})
