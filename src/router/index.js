import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Websites from '../views/Websites.vue'
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
    component: Home,
    meta: {
      title: 'Artexa Agency - We create websites - Home',
      metaTags: [
        {
          name: 'description',
          content: 'We are a world class digital agency, who can develop a wide range of websites such as brochure, e-commerce and multilingual websites for B2B and B2C audiences. All the websites we create are responsive websites which automatically adjust to the device they are being viewed on. We create custom websites that are linked to a back end that can be easily updated by you or your team.'
        },
        {
          property: 'og:description',
          content: 'We design and develop responsive brochure websites to showcase your products and services in alignment with your brand essence, your target audience and your preferences. Our websites follow the latest design trends to ensure they’re up to date for years to come. In addition to designing a beautiful, trendy and modern-looking website that fits with your brand, we will also take care of all technical aspects of the e-commerce side to ensure that everything works without issues. We can set up smooth payment systems, integrations and subscriptions. We deliver web-based applications that help organizations to keep pace with constantly changing business needs. Such applications boast quick and easy access from anywhere on the Internet, ensure lower hardware and software costs, allow faster time to market, and provide flexible integration with other systems.'
        }
      ]
    }
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: {
      title: 'Artexa Agency - We support you in your digital transformation - About',
      metaTags: [
        {
          name: 'description',
          content: 'To get a sense of what our core values are, we ask ourself what bring us the most joy, or what we couldn’t live without. What gives us life meaning or what do we want to achieve?'
        },
        {
          property: 'og:description',
          content: 'We are always looking for innovation and the best solutions for our customers. In a world that moves at the speed of a click, we try to give maximum importance to your needs in the shortest time possible. We know how important is the presence on the web for our customers, and that\'s why we are committed every day to ensure the best result. We understand that when your product arrives you might not particularly like it, when something goes wrong we always try to move as quickly as possible to respond and resolve any issues or needs.'
        }
      ]
    }
  },
  {
    path: '/websites',
    name: 'Websites',
    component: Websites,
    meta: {
      title: 'Artexa Agency - The upgrade of your business starts with your website. - Websites',
      metaTags: [
        {
          name: 'description',
          content: 'Depending on the type of project, the basic steps of building a website can vary. Not all websites are the same: to create a company website, an online catalog or an e-commerce, different types of management and planning are required. Consequently, even the implementation phases can increase or be divided in turn into sub-phases.'
        },
        {
          property: 'og:description',
          content: 'To define the vision of a product or service, I take the time to listen to you and understand your needs and those of your customers. I write a document with the technical specifications, some mockups, a program and a budget estimate. There is no universal and precise formula, because each project can have different characteristics. At the beginning we have to define objectives and potential critical issues, after which we move on to the conception of the product and then to the creation of a prototype. Do you have the vision, feel the pull and all you need is software? We will work with you to develop this new functional and design product that your customers will love to use. And We\'ll help you get started.'
        }
      ]
    }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
    meta: {
      title: 'Artexa Agency - We\'re here to help and answer any question you might have. - Contact',
      metaTags: [
        {
          name: 'description',
          content: 'Evaluating our products and need advice before you buy? We\'ll help you find the best way to better represent your business at the right price. As your partner we do a lot, but what\'s more important we\'re at your side 6/7.'
        },
        {
          property: 'og:description',
          content: 'How much do you charge for a website? Our website packages usually range from € 2500 – € 6000. However it really depends on what kind of website you need.Why are you so expensive? The process we use to build your website takes a certain amount of time and a lot of planning and research. Unlike other agencies, we DON’T use templates. We build your website from scratch, which means you get a unique design tailored around your business. Buying a website from us should not just simply be seen as a business expense as your website is a sales tool that should earn you money. Why are you so cheap? Yep. We’ve also been asked that question too. We spend a lot of time researching, planning the user’s journey through your site and then finally with the design and build. We’re typically cheaper than larger agencies because we work remotely which means you don’t pay for the water cooler or beanbag chairs also we’re a small team who take on a limited amount of clients each year. You won’t be talking to account managers, you’ll talk directly to the owner. This saves on staff costs.'
        }
      ]
    }
  },
  {
    path: '/team',
    name: 'Team',
    component: Team,
    meta: {
      title: 'Artexa Agency - Growth and learning is in our DNA. - Team',
      metaTags: [
        {
          name: 'description',
          content: 'Artexa is a Luxembourg-based creative team working with ambitious tech companies around the world. Every day, we build products, brands and websites that help our partners stand out, connect with customers and grow faster.'
        },
        {
          property: 'og:description',
          content: 'We create successful responsive website that are fast, easy to use, and build with the best practices. The main area of expertise is full-stack development HTML, CSS, JS, PHP, building small and medium web apps, animations. We have also experience with popular open-source CMS like Wordpress. We design fluid user experience and anticipate the user journey with creative solutions as well as creating brand recognition with design systems. Our team is capable of delivering custom websites, mobile apps, e-commerces with a variety of tools & skill sets that allows you to be on top of the digital world. Optimizations & reviews are part of our culture. We constantly improve our products to increase conversion rates and our client happiness.'
        }
      ]
    }
  },
  {
    path: '/video',
    name: 'Video',
    component: Video,
    meta: {
      title: 'Artexa Agency - Enhance the attractiveness of your website. - Video',
      metaTags: [
        {
          name: 'description',
          content: 'Attract new customers, increase your brand visibility and create relevant content for your business. Discover all the tools you need to easily create promotional videos for any type of business, from product and service presentations to restaurant, real estate, online store and more.'
        },
        {
          property: 'og:description',
          content: 'Treat yourself to a set of personalized professional photos: portraits of employees, construction sites, specific products... A photographer will come to your place and make custom shots. A professional photographer comes to your home and takes and does a photo shoot as well as a 30 second video and a 30 second video that will be used to illustrate your website. The corporate video is a custom-made professional video of 1 to 2 minutes, made on your offices or at your place of work. The video is integrated on your website and referenced on YouTube.'
        }
      ]
    }
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
