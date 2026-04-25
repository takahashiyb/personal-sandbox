import HomePage from '@/pages/HomePage.vue'
import LessonBoxShadow from '@/pages/LessonBoxShadow.vue'
import LessonDashboard from '@/pages/LessonDashboard.vue'
import LessonGlassEffect from '@/pages/LessonGlassEffect.vue'
import LessonParent from '@/pages/LessonParent.vue'
import LessonScroll from '@/pages/LessonScroll.vue'
import LessonScrollSnap from '@/pages/LessonScrollSnap.vue'
import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomePage },
    {
      path: '/lesson',
      name: 'lesson',
      component: LessonParent,
      children: [
        { path: '', name: 'dashboard', component: LessonDashboard },
        { path: 'scroll-animation', name: 'scroll-animation', component: LessonScroll },
        { path: 'scroll-snap', name: 'scroll-snap', component: LessonScrollSnap },
        {
          path: 'glass-effect',
          name: 'glass-effect',
          component: LessonGlassEffect,
        },
        {
          path: 'box-shadow',
          name: 'box-shadow',
          component: LessonBoxShadow,
        },
      ],
    },
  ],
})

export default router
