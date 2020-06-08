import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/components/pages/Home.vue'),
      meta: {
        title: 'Home Page'
      }
    },
    {
      path: '/example',
      name: 'example',
      component: () => import('@/components/pages/Example.vue'),
      meta: {
        title: 'Example Page'
      }
    },
    {
      path: '*',
      name: 'notFound',
      component: () => import('@/components/pages/404.vue'),
      meta: {
        title: '404 | Not Found'
      }
    }
  ]
})

export default router
