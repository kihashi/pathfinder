import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/components/Welcome'

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
      order: 2
    },
    {
      path: '/champions',
      name: 'Champions',
      order: 3
    }
  ],
  linkActiveClass: 'is-active'
})
