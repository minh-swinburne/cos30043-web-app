import { createRouter, createWebHistory } from 'vue-router'
import MainView from '../views/MainView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: MainView,
      children: [
        {
          path: '',
          redirect: 'home'
        },
        {
          path: 'home',
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('../views/MainHomeView.vue')
        },
        {
          path: 'about',
          component: () => import('../views/MainAboutView.vue')
        },
        {
          path: 'products',
          component: () => import('../views/MainProductsView.vue')
        },
      ]
    },
    {
      path: '/user/:username',
      name: 'user',
      component: () => import('../views/UserView.vue'),
      children: [
        {
          path: 'profile',
          name: 'user-profile',
          component: () => import('../views/UserProfileView.vue')
        },
        {
          path: 'settings',
          name: 'user-settings',
          component: () => import('../views/UserSettingsView.vue')
        }
      ]
    },
    {
      path: '/404',
      name: 'not-found',
      component: () => import('../views/NotFoundView.vue')
    },
    {
      path: '/:catchAll(.*)',
      redirect: '/404'
    }
  ]
})

export default router
