import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Websites from '../views/Websites.vue'
import Showcasewebsite from '../views/Showcasewebsite.vue'
import Ecommerce from '../views/Ecommerce.vue'
import Intranet from '../views/Intranet.vue'
import Contact from '../views/Contact.vue'
import Workflow from '../views/Workflow.vue'
import Team from '../views/Team.vue'
import Video from '../views/Video.vue'
import Terms from '../views/Terms.vue'
import Privacy from '../views/Privacy.vue'
import Thanks from '../views/Thanks.vue'
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
    path: '/websites',
    name: 'Websites',
    component: Websites
  },
  {
    path: '/showcasewebsite',
    name: 'Showcasewebsite',
    component: Showcasewebsite
  },
  {
    path: '/ecommerce',
    name: 'Ecommerce',
    component: Ecommerce
  },
  {
    path: '/intranet',
    name: 'Intranet',
    component: Intranet
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
    path: '/video',
    name: 'Video',
    component: Video
  },
  {
    path: '/terms',
    name: 'Terms',
    component: Terms
  },
  {
    path: '/privacy',
    name: 'Privacy',
    component: Privacy
  },
  {
    path: '/workflow',
    name: 'Workflow',
    component: Workflow
  },
  {
    path: '/thanks',
    name: 'Thanks',
    component: Thanks
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
    window.scrollTo(0, 0);
  }

})

export default router
