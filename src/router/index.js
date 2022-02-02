import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import Gianluca from '../views/Gianluca.vue'
import Bryan from '../views/Bryan.vue'
import Workflow from '../views/Workflow.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/gianluca',
    name: 'Gianluca',
    component: Gianluca
  },
  {
    path: '/bryan',
    name: 'Bryan',
    component: Bryan
  },
  {
    path: '/workflow',
    name: 'Workflow',
    component: Workflow
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  /*eslint-disable */
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
      return {el: to.hash}
    } else {
      return { x: 0, y: 0 }
    }
  }
})

export default router
