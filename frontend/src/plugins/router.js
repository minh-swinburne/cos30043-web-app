import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore, useMetaStore } from '@/stores'

import MainView from '@/views/Main'
import OfflineView from '@/views/Main/OfflineView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      // name: 'main',        
      component: MainView,
      children: [
        {
          path: '',
          name: 'root',
          redirect: 'home',
        },
        {
          path: 'home',
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.  
          component: () => import('@/views/Main/HomeView'),
          meta: { title: 'Home' },
        },
        {
          path: 'posts',
          children: [
            {
              path: 'feed',
              name: 'post-feed',
              component: () => import('@/views/Main/Post/PostsFeedView'),
              meta: { title: 'Posts Feed' },
            },
            {
              path: 'create',
              name: 'post-create',
              component: () => import('@/views/Main/Post/PostCreateView'),
              meta: { title: 'Create Post' },
            },
            {
              path: ':id',
              children: [
                {
                  path: 'read',
                  name: 'post-read',
                  component: () => import('@/views/Main/Post/PostReadView'),
                  props: route => ({ id: Number(route.params.id) }),
                }
              ]
            }
          ],
        },
        {
          path: 'pets',
          name: 'pets',
          meta: { title: 'Pets' },
        },
        {
          path: 'about',
          component: () => import('@/views/Main/AboutView'),
        },
        {
          path: '404',
          name: 'not-found',
          component: () => import('@/views/Main/NotFoundView'),
          meta: { title: '404' },
        },
        {
          path: 'offline',
          name: 'offline',
          component: OfflineView,
          meta: { title: 'Offline' },
        }
      ]
    },
    {
      path: '/auth',
      name: 'auth',
      component: () => import('@/views/Authentication'),
      children: [
        {
          path: 'register',
          name: 'register',
          component: () => import('@/views/Authentication/RegisterView'),
          meta: { title: 'Register' },
        },
        {
          path: 'login',
          name: 'login',
          component: () => import('@/views/Authentication/LoginView'),
          meta: { title: 'Login' },
        },
        {
          path: 'logout',
          name: 'logout',
          component: () => import('@/views/Authentication/LogoutView'),
          meta: { 
            title: 'Logout',
            requiresAuth: true,
          },
        },
        {
          path: 'forgot-password',
          name: 'forgot-password',
          component: () => import('@/views/Authentication/ForgotPasswordView'),
          meta: { title: 'Forgot Password' },
        },
      ]
    },
    {
      path: '/user/:username',
      name: 'user',
      component: () => import('@/views/User'),
      children: [
        {
          path: 'profile',
          name: 'user-profile',
          component: () => import('@/views/User/UserProfile')
        },
        {
          path: 'settings',
          name: 'user-settings',
          component: () => import('@/views/User/UserSettings')
        }
      ]
    },
    {
      path: '/:catchAll(.*)',
      redirect: '/404?'
    }
  ]
})

router.beforeEach((to, from) => {
  // console.log('from:', from, 'to:', to)
  // if (!navigator.onLine && to.name !== 'offline') {
  //   return '/offline'
  // }
  const authStore = useAuthStore()

  if (to.meta.requiresAuth && !authStore.isAuthenticated) return '/auth/login'
})

const DEFAULT_TITLE = 'PetPawPal | COS30043 Custom Web Application'
router.afterEach((to, from) => {
  const title = useMetaStore().title
  document.title = `${to.meta.title} | ${title}` || DEFAULT_TITLE
})

export default router
