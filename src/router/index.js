import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home'),
    meta: {layout: 'LayoutDefault'}
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About'),
    meta: {layout: 'LayoutDefault'}
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login'),
    meta: {layout: 'LayoutAuth'}
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
