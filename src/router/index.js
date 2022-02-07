import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import Workflow from '../views/Workflow.vue'
import Team from '../views/Team.vue'
import PageNotFound from '../views/PageNotFound.vue'

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
    path: '/team',
    name: 'Team',
    component: Team
  },
  {
    path: '/workflow',
    name: 'Workflow',
    component: Workflow
  },
  {
    path: "/:catchAll(.*)",
    name: 'Page_not_found',
    component: PageNotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  /*eslint-disable */
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }

})

export default router
