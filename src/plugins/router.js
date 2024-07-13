import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',  
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.        
      component: () => import("@/views/Main"),
      children: [
        {
          path: '',
          name: 'root',
          redirect: 'home',
        },
        {
          path: 'home',
          component: () => import('@/views/Main/HomeView.vue'),
          meta: { title: 'Home - PetPawPal' },
        },
        {
          path: 'blogs',
          component: () => import('@/views/Main/BlogsView.vue'),
          meta: { title: 'Blogs - PetPawPal' },
        },
        {
          path: 'about',
          component: () => import('@/views/Main/MainAbout.vue')
        },
        {
          path: 'products',
          component: () => import('@/views/Main/MainProducts.vue')
        },
        {
          path: '/404',
          name: 'not-found',
          component: () => import('@/views/Main/NotFoundView.vue'),
          meta: { title: '404 - PetPawPal' },
        },
      ]
    },
    {
      path: '/auth',
      name: 'auth',
      component: () => import('@/views/Authentication/index.vue'),
      children: [
        {
          path: '/register',
          name: 'register',
          component: () => import('@/views/Authentication/RegisterView.vue')
        },
        {
          path: '/login',
          name: 'login',
          component: () => import('@/views/Authentication/LoginView.vue')
        },
      ]
    },
    {
      path: '/pets',
      name: 'pets',
    },
    {
      path: '/user/:username',
      name: 'user',
      component: () => import('@/views/User/User.vue'),
      children: [
        {
          path: 'profile',
          name: 'user-profile',
          component: () => import('@/views/User/UserProfile.vue')
        },
        {
          path: 'settings',
          name: 'user-settings',
          component: () => import('@/views/User/UserSettings.vue')
        }
      ]
    },
    {
      path: '/:catchAll(.*)',
      redirect: '/404'
    }
  ]
})

const DEFAULT_TITLE = 'PetPawPal | COS30043 Custom Web Application'
router.afterEach((to, from) => {
  document.title = to.meta.title || DEFAULT_TITLE
})

export default router
