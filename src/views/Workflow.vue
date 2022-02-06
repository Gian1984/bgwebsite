<template>
  <div class="bg-white">
    <div class="relative overflow-hidden">
      <main>



        <div class="relative pb-32 bg-gray-800 pt-40">
          <div class="absolute inset-0">
            <img class="w-full h-full object-cover" src="img/red_header.png" />
            <div class="absolute inset-0 bg-gray-900 opacity-50" aria-hidden="true" />
          </div>
          <div class="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">


            <h1 class="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
              <transition
                  appear
                  @before-enter="beforeEnter"
                  @enter="enter"
              >
                <h1 class="text-4xl font-extrabold tracking-tight text-teal-500 md:text-5xl lg:text-6xl">We believe in design</h1>
              </transition>
            </h1>
              <transition
                  appear
                  @before-enter="beforeEnter"
                  @enter="enter"
              >
                <p class="mt-6 max-w-3xl text-xl text-gray-300">
                  We design fluid user experience and anticipate the user journey with creative solutions as well as creating brand recognition with design systems.<br>
                  Our team is capable of delivering custom websites, mobile apps, e-commerces with a variety of tools & skill sets that allows you to be on top of the digital world.<br>
                  Optimizations & reviews are part of our culture. We constantly improve our products to increase conversion rates and our client happiness.
                </p>
              </transition>

          </div>
        </div>



        <!-- Feature section with screenshot -->
        <div class="relative  pt-16 sm:pt-24 lg:pt-24">
          <div class="mx-auto max-w-md px-4 pt-10 text-center sm:px-6 sm:max-w-3xl lg:px-8 lg:max-w-7xl">
            <div>
              <h2 class="text-base font-semibold tracking-wider text-cyan-600 uppercase">Our skills</h2>
              <p class="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
                Skills & Experience
              </p>
              <p class="mt-5 max-w-prose mx-auto text-xl text-gray-500">
                We create successful responsive website that are fast, easy to use, and build with the best practices. The main area of expertise is full-stack development HTMl, CSS, JS, PHP, building small and medium web apps, animations. We have also experience with popular open-source CMS like Wordpress.
              </p>
            </div>
            <div class="mt-12 shadow-2xl mb-24">
              <img class="rounded-lg ring-1 ring-black ring-opacity-5 h-full w-full" src="img/header_main.png" alt="strategy_image" />
            </div>
          </div>
        </div>

        <!-- Feature section with grid -->
        <div class="relative bg-white py-16 sm:py-24 lg:py-24">
          <div class="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
            <h2 class="text-base font-semibold tracking-wider text-cyan-600 uppercase">Deploy faster</h2>
            <p class="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
              Everything you need to deploy your app
            </p>
            <p class="mt-5 max-w-prose mx-auto text-xl text-gray-500">
              We approach to website development fuses creativity, technology and data analysis, giving you the platform you need to reach new audiences and engage your existing customers.
            </p>
            <div class="mt-12">
              <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                <div v-for="feature in features" :key="feature.name" class="pt-6">
                  <div class="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                    <div class="-mt-6">
                      <div>
                        <span class="inline-flex items-center justify-center p-3 bg-gradient-to-r from-gray-900 to-gray-700 rounded-md shadow-lg">
                          <component :is="feature.icon" class="h-6 w-6 text-white" aria-hidden="true" />
                        </span>
                      </div>
                      <h3 class="mt-8 text-lg font-medium text-gray-900 tracking-tight">{{ feature.name }}</h3>
                      <p class="mt-5 text-base text-gray-500">
                        {{ feature.description }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>





        <div class="relative bg-gray-900">
          <div class="h-80 w-full absolute bottom-0 xl:inset-0 xl:h-full">
            <div class="h-full w-full xl:grid xl:grid-cols-2">
              <div class="h-full xl:relative xl:col-start-2">
                <img class="h-full w-full object-cover opacity-25 xl:absolute xl:inset-0" src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80&sat=-100" alt="People working on laptops" />
                <div aria-hidden="true" class="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-900 xl:inset-y-0 xl:left-0 xl:h-full xl:w-32 xl:bg-gradient-to-r" />
              </div>
            </div>
          </div>
          <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 xl:grid xl:grid-cols-2 xl:grid-flow-col-dense xl:gap-x-8">
            <div class="relative pt-12 pb-64 sm:pt-24 sm:pb-64 xl:col-start-1 xl:pb-24">
              <p class="mt-3 text-3xl font-extrabold text-white">We will help grow your business</p>
              <p class="mt-5 text-lg text-gray-300">Since the commercialization of the Internet in the early 90s, Web development has undergone a profound change. If once the Internet pages were a bare set of text fields, today in the foreground there is an elaborate presentation of multimedia content. The original information platform has now become a means of entertainment. Internet users demand interactive web pages with a pleasing design that allows for intuitive use. In order to meet this need, we include dynamic content with the help of various tools and create customized websites for the user.</p>
              <div class="mt-12 grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-2">
                <p v-for="item in metrics" :key="item.id">
                  <span class="block text-2xl font-bold text-white">{{ item.stat }}</span>
                  <span class="mt-1 block text-base text-gray-300"
                  ><span class="font-medium text-white">{{ item.emphasis }}</span><br> {{ item.rest }}</span
                  >
                </p>
              </div>
            </div>
          </div>
        </div>





        <!-- Blog section -->
        <div class="relative bg-gray-50 py-16 sm:py-24 lg:py-32">
          <div class="relative">
            <div class="text-center mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
              <h2 class="text-base font-semibold tracking-wider text-cyan-600 uppercase">At Work</h2>
              <p class="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
                This is how we do it
              </p>
              <p class="mt-5 mx-auto max-w-prose text-xl text-gray-500">
                Depending on the type of project, the basic steps of building a website can vary. Not all websites are the same: to create a company website, an online catalog or an e-commerce, different types of management and planning are required. Consequently, even the implementation phases can increase or be divided in turn into sub-phases.
              </p>
            </div>
            <div class="mt-12 mx-auto max-w-md px-4 grid gap-8 sm:max-w-lg sm:px-6 lg:px-8 lg:grid-cols-3 lg:max-w-7xl">
              <div v-for="post in blogPosts" :key="post.id" class="flex flex-col rounded-lg shadow-lg overflow-hidden">
                <div class="flex-shrink-0 bg-white">
                  <img class="h-48 mx-auto object-cover" :src="post.image" alt="" />
                </div>
                <div class="flex-1 bg-white p-6 flex flex-col justify-between">
                  <div class="flex-1">
                    <p class="text-sm font-medium text-cyan-600">
                      {{ post.category.name }}
                    </p>
                    <a :href="post.href" class="block mt-2">
                      <p class="text-xl font-semibold text-gray-900">
                        {{ post.title }}
                      </p>
                      <p class="mt-3 text-base text-gray-500">
                        {{ post.preview }}
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import gsap from 'gsap'
import { defineComponent, h } from 'vue'
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import {CloudUploadIcon, CogIcon, MenuIcon, QrcodeIcon, ServerIcon, ShieldCheckIcon, XIcon, PencilAltIcon} from '@heroicons/vue/outline'
import { ChevronRightIcon, ExternalLinkIcon } from '@heroicons/vue/solid'

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]
const features = [
  {
    name: 'Push to Deploy',
    description: 'Knowledge of Git & most common provider of Internet hosting for software development and version control.',
    icon: CloudUploadIcon,
  },
  {
    name: 'Style',
    description: 'Knowledge of most common CSS framework, like Bootstrap & Tailwind, to easily implement user-friendly UIs.',
    icon: PencilAltIcon,
  },
  {
    name: 'Performant',
    description: 'Knowledge of VueJS framework, the most versatile & performant way to make blazing fast the Virtual DOM.',
    icon: QrcodeIcon,
  },
  {
    name: 'Advanced Security',
    description: 'Usage of Laravel framework, the recommended PHP framework for robust application security',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Powerful API',
    description:
        'API management, to simplify how you connect with your partners, (the Google Maps API is a popular example).',
    icon: CogIcon,
  },
  {
    name: 'Hosting',
    description: 'Administrate hosting service, manage your email accounts or setup a Wordpress instance.',
    icon: ServerIcon,
  },
]


const metrics = [
  { id: 1, stat: '20 +', emphasis: 'Certificates', rest: 'Our main proof expertise is in everything related to web development industry acknowledgments and achievements' },
  { id: 2, stat: '9K +', emphasis: 'Audit', rest: 'We will thoroughly examine your digital project to detect areas for correction and help you archieve your business goals. ' },
]


const blogPosts = [
  {
    id: 1,
    title: 'Roadmap',
    href: '#',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { name: 'Stage 1' },
    image:'img/map.png',
    preview:
        'To define the vision of a product or service, I take the time to listen to you and understand your needs and those of your customers. I write a document with the technical specifications, some mockups, a program and a budget estimate.',
  },
  {
    id: 2,
    title: 'Prototyping',
    href: '#',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10',
    category: { name: 'Stage 2' },
    image:'img/prototyping.png',
    preview:
        'There is no universal and precise formula, because each project can have different characteristics. At the beginning we have to define objectives and potential critical issues, after which we move on to the conception of the product and then to the creation of a prototype.',
  },
  {
    id: 3,
    title: 'Development',
    href: '#',
    date: 'Feb 12, 2020',
    datetime: '2020-02-12',
    category: { name: 'Stage 3' },
    image: 'img/developer.png',
    preview:
        'Do you have the vision, feel the pull and all you need is software? I will work with you to develop this new functional and design product that your customers will love to use. And I\'ll help you get started.',
  },
]
const footerNavigation = {
  social: [
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/createwebinfo',
      icon: defineComponent({
        render: () =>
            h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
              h('path', {
                'fill-rule': 'evenodd',
                d:
                    'M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z',
                'clip-rule': 'evenodd',
              }),
            ]),
      }),
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/createwebinfo/',
      icon: defineComponent({
        render: () =>
            h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
              h('path', {
                'fill-rule': 'evenodd',
                d:
                    'M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z',
                'clip-rule': 'evenodd',
              }),
            ]),
      }),
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com/createwebinfo',
      icon: defineComponent({
        render: () =>
            h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
              h('path', {
                d:
                    'M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84',
              }),
            ]),
      }),
    },
    {
      name: 'GitHub',
      href: 'https://github.com/Gian1984',
      icon: defineComponent({
        render: () =>
            h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
              h('path', {
                'fill-rule': 'evenodd',
                d:
                    'M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z',
                'clip-rule': 'evenodd',
              }),
            ]),
      }),
    },
  ],
}

export default {
  components: {
    Popover,
    PopoverButton,
    PopoverPanel,
    ChevronRightIcon,
    ExternalLinkIcon,
    MenuIcon,
    CloudUploadIcon,
    CogIcon,
    QrcodeIcon,
    ServerIcon,
    ShieldCheckIcon,
    XIcon,
    PencilAltIcon
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
        duration: 1.5,
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
      navigation,
      features,
      blogPosts,
      footerNavigation,
      metrics,
      beforeEnter,
      enter,
      slide,
      beforeSlide,
    }
  },

}
</script>
