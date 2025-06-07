import AboutView from '@/views/AboutView.vue'
import CoachingView from '@/views/CoachingView.vue'
import ContactView from '@/views/ContactView.vue'
import HomeView from '@/views/HomeView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView,
      name: 'home',
    },
    {
      path: '/contact',
      component: ContactView,
      name: 'contact',
    },
    {
      path: '/about',
      component: AboutView,
      name: 'about',
    },
    {
      path: '/coaching',
      component: CoachingView,
      name: 'coaching',
    },
  ],
})

export default router
