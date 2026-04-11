import HomePage from '@/pages/HomePage.vue'
import LessonScroll from '@/pages/LessonScroll.vue'
import LessonScrollSnap from '@/pages/LessonScrollSnap.vue'
import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomePage },
    { path: '/lesson/scroll', name: 'scroll', component: LessonScroll },
    { path: '/lesson/scroll-snap', name: 'scroll-snap', component: LessonScrollSnap },
  ],
})

export default router
