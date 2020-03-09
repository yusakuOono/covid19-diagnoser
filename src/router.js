import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
 mode: 'history',
 base: process.env.BASE_URL,
 routes: [
  {
   path: '/',
   name: 'firstPage',
   component: () => import('./views/page/firstPage.vue')
  },
  {
   path: '/page2',
   name: 'Page2',
   component: () => import('./views/page/Page2.vue')
  },
  {
   path: '/page3',
   name: 'Page3',
   component: () => import('./views/page/Page3.vue')
 },
 {
  path: '/page4',
  name: 'Page4',
  component: () => import('./views/page/Page4.vue')
  },
  {
   path: '/page5',
   name: 'Page5',
   component: () => import('./views/page/Page5.vue')
  },
  {
   path: '/page6',
   name: 'Page6',
   component: () => import('./views/page/Page6.vue')
   },
   {
    path: '/page7',
    name: 'Page7',
    component: () => import('./views/page/Page7.vue')
   },
   {
    path: '/answer1',
    name: 'Answer1',
    component: () => import('./views/page/answer/answer1.vue')
   },
   {
    path: '/answer2',
    name: 'Answer2',
    component: () => import('./views/page/answer/answer2.vue')
   }
 ]
})
