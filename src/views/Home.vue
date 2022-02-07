<template>
  <div class="relative pb-32 bg-gray-800 pt-40">
    <div class="absolute inset-0">
      <img class="w-full h-full object-cover" src="https://tailwindui.com/img/ecommerce-images/home-page-01-hero-full-width.jpg" alt="web-dev-home" />
      <div class="absolute inset-0 bg-gray-900 opacity-50" aria-hidden="true" />
    </div>
    <div class="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
      <transition
          appear
          @before-enter="beforeSlide"
          @enter="slide"
      >
      <img class="h-24" src="img/artexa.png"/>
      </transition>
      <transition
          appear
          @before-enter="beforeEnter"
          @enter="enter"
      >
      <h1 class="mt-6 text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl text1">Web Development Company</h1>
      </transition>
      <transition
          appear
          @before-enter="beforeEnter"
          @enter="enter"
      >
      <p class="mt-6 ml-4 max-w-3xl text-xl text-gray-300 text2 ">Take the software path to your digital future.</p>
      </transition>
    </div>
  </div>

<!--  first block post  -->

  <div class="relative pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
    <div class="absolute inset-0">
      <div class="bg-white h-1/3 sm:h-2/3" />
    </div>
    <div class="relative max-w-7xl mx-auto">
      <div class="text-center">
        <h2 class="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
          Websites & Apps
        </h2>
        <p class="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4 ">
          We are a world class digital agency, who can develop a wide range of websites such as brochure, e-commerce and multilingual websites for B2B and B2C audiences. All the websites we create are responsive websites which automatically adjust to the device they are being viewed on. We create custom websites that are linked to a back end that can be easily updated by you or your team.
        </p>
      </div>
      <div class="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
        <div v-for="post in posts" :key="post.title" class="flex flex-col rounded-lg shadow-lg overflow-hidden">
          <div class="flex-shrink-0">
            <img class="h-48 mx-auto mt-10" :src="post.imageUrl" alt="" />
          </div>
          <div class="flex-1 bg-white p-6 flex flex-col justify-between">
            <div class="flex-1">
              <a :href="post.href" class="block mt-2">
                <p class="text-xl font-semibold text-gray-900">
                  {{ post.title }}
                </p>
                <p class="mt-3 text-base text-gray-500">
                  {{ post.description }}
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>




  <div>
    <div class="relative mb-22 box2">
      <div class="absolute inset-x-0 bottom-0" />
      <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div class="text-center">
          <h2 class="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
            Our technologies
          </h2>
          <p class="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4 ">
            The development of advanced web applications is our specialty, and we will successfully fulfill all your web application development requirements, from small-sized to wider-ranged projects. To maintain and improve our high-quality web apps, we have expertise in various web development technologies.
          </p>
        </div>
        <div class="relative  sm:rounded-2xl sm:overflow-hidden">
          <div class=" flow-root">
            <div class="-my-2">
              <div class="box-content py-2 relative h-80 overflow-x-auto xl:overflow-visible">
                <div class="absolute min-w-screen-xl px-4 flex space-x-8 sm:px-6 lg:px-8 xl:relative xl:px-0 xl:space-x-0 xl:grid xl:grid-cols-6 xl:gap-x-8">
                  <p v-for="category in galleries" :key="category.name" class="relative w-56 h-56 rounded-lg p-6 flex flex-col overflow-hidden hover:opacity-75 xl:w-auto">
                <span aria-hidden="true" class="absolute inset-0 zoom">
                  <img :src="category.imageSrc" alt="" class="w-56 h-56 object-center object-cover" />
                </span>
                    <span aria-hidden="true" class="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50" />
                    <span class="relative mt-auto text-center text-xl font-bold text-white">{{ category.name }}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

<!--  second block what we do-->

  <div class="bg-white">
    <div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
      <div>
        <h2 class="text-base font-semibold text-teal-500 uppercase tracking-wide text4">Everything you need</h2>
        <p class="mt-2 text-3xl font-extrabold text-gray-900 text5">Areas of tech expertise</p>
        <p class="mt-4 text-lg text-gray-500">Our team is also highly experienced with working with a wide variety of frameworks and languages such as PHP, Laravel, TailwindCSS, Bootstrap, JS and Vue.js.</p>
      </div>
      <div class="mt-12 lg:mt-0 lg:col-span-2">
        <dl class="space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:grid-rows-3 sm:grid-flow-col sm:gap-x-6 sm:gap-y-10 lg:gap-x-8">
          <div v-for="feature in features" :key="feature.name" class="relative">
            <dt>
              <CheckIcon class="absolute h-6 w-6 text-teal-500" aria-hidden="true" />
              <p class="ml-9 text-lg leading-6 font-medium text-gray-900">{{ feature.name }}</p>
            </dt>
            <dd class="mt-2 ml-9 text-base text-gray-500">
              {{ feature.description }}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>









</template>


<script>
import { CheckIcon } from '@heroicons/vue/outline'
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'





const galleries = [
  {
    name: 'JS',
    imageSrc: 'img/js.png',
  },
  {
    name: 'VueJS',
    imageSrc: 'img/vuejs.png',
  },
  {
    name: 'Php',
    imageSrc: 'img/php.png',
  },
  {
    name: 'Laravel',
    imageSrc: 'img/laravel.png',
  },
  {
    name: 'TailwindCss',
    imageSrc: 'img/tailwind.png'
  },
  {
    name: 'Wordpress',
    imageSrc: 'img/wordpress.png'
  },
]



const features = [
  {
    name: 'Mobile Development',
    description: 'Obtain your top-of-the-class and tailored-fit mobile application. With us as your experienced custom mobile app developer, possessing deep expertise and knowledge of the latest mobile development frameworks, you can implement a mobile project of any complexity.',
  },
  {
    name: 'Web Development',
    description: 'Build a custom web application. Being a world-class web development vendor, we can create a web app capable of resolving your industry-specific business challenges, boosting your efficiency, winning new customers, and increasing your user satisfaction rates.' },
  {
    name: 'Product Development Services',
    description: 'Flexible and highly iterative approach to software Product Development Services makes it possible even the most complex IT solutions from scratch. We collaborate closely with our customers to ensure the best deliverables and features you need.',
  },
  {
    name: 'Outsourced IT Services',
    description: 'Comprehensive Outsourced IT Services for businesses will enable you to focus on attaining your goals and matching your priorities while entrusting your IT industry-specific challenges to a reliable team of world-class tech experts working in a truly Agile way.'
  },
  {
    name: 'UI/UX Design',
    description: 'In-house UI/UX design team of multidisciplinary experts is capable of providing you with user-friendly and convenient-to-use solutions with perfect user journeys and intuitive navigation. As a result, your branded products will be not only effective but also feature an outstanding look and feel.'
  },
  {
    name: 'Solution Architecture',
    description: 'Ensure that your envisioned IT project is scalable, flexible, and perfectly adaptable to your corporate tech ecosystem with a reliable foundational architecture. With ours expert-level custom solution architecture services and consultancy you will definitely obtain one!'
  },
]


const posts = [
  {
    title: 'Scoping',
    href: '#',
    description:
        'Here we look at what is needed for the project. We start with an exploratory workshop to discover all the needs and assess your existing website. The workshop will include factors such as how you envisage the user journey? What is the objective of the site and the functionality required? What integrations are required? Once we have all the information we will set out a UX journey and create a full set of wireframes mapping out the user\'s journey around the site.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    imageUrl:
        'img/scoping.png',
  },
  {
    title: 'Design',
    href: '#',
    description:
        'Once we have understood all your wants and needs, we can start designing the website. In this phase, the wireframes start to take shape with design and colours. We use several tools so you will be able to see how the pages and design fits together and experience the site before it is built, in order to be fully happy before moving into the build phase.',
    imageUrl:
        'img/design.png',
  },
  {
    title: 'Development',
    href: '#',
    description:
        'This is the largest phase. We will have various milestones and reviews throughout the process. A preview link is provided during the development stage so you can see the project come to life before final sign off.',
    imageUrl:
        'img/coder.png',
  },
  {
    title: 'Brochure Websites',
    href: '#',
    description:
        'We design and develop responsive brochure websites to showcase your products and services in alignment with your brand essence, your target audience and your preferences. Our websites follow the latest design trends to ensure they’re up to date for years to come.',
    imageUrl:
        'img/vitrine.png',
  },
  {
    title: 'E-commerce Websites',
    href: '#',
    description:
        'In addition to designing a beautiful, trendy and modern-looking website that fits with your brand, we will also take care of all technical aspects of the e-commerce side to ensure that everything works without issues. We can set up smooth payment systems, integrations and subscriptions.',
    imageUrl:
        'img/ecommerce.png',
  },
  {
    title: 'Multilingual Websites',
    href: '#',
    description:
        'One of the perks of having an international team working is that we have over 3 native languages spoken in-house and therefore can provide you with multilingual websites if needed. Our multilingual websites will be able to allow users to change their languages for themselves.',
    imageUrl:
        'img/languages.png',
  },

]

gsap.registerPlugin(ScrollTrigger)



export default {

  mounted() {
    this.scrollAnimation()

  },

  methods: {
    scrollAnimation() {


      gsap.timeline({
        scrollTrigger: {
          trigger: ".box2",
          start: "top top",
          end: "bottom top",
          // markers: true,
          // scrub: true,
          // pin: true,
        }
      })
          .from(".text4", { x : -50, opacity: 0, duration:0.5 })
          .to( ".text4",{ x : 0 , opacity : 50})
          .from(".text5", { x : -50, opacity: 0, duration:0.5 })
          .to( ".text5",{ x : 0 , opacity : 50})
          // .from(".text5", { x : innerWidth * 1, opacity: 0 })
    },
  },



  components: {
    CheckIcon,
  },

  setup() {


    const beforeEnter = (el) => {
      el.style.opacity = 0
      el.style.transform = 'translateX(400px)'
    }
    const enter = (el, done) => {
      gsap.to(el, {
        opacity: 1,
        x: 0,
        duration: 2.5,
        onComplete: done,
        delay: el.dataset.index * 0.5
      })
    }

    const beforeSlide = (el) => {
      el.style.opacity = 0
      el.style.transform = 'translateY(400px)'
    }

    const slide = (el, done) => {
      gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 1.5,
        onComplete: done,
        delay: el.dataset.index * 0.2,
        rotation: 360,
      })
    }


    return {
      posts,
      features,
      galleries,
      beforeEnter,
      enter,
      slide,
      beforeSlide,
    }
  },
}
</script>





