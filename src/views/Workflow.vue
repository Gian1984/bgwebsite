<template>
  <div class="bg-white">
    <div class="relative overflow-hidden">
      <main>
        <div class="w-full h-screen bg-cover" style="background-image: url('img/header_workflow.webp');">
          <div class="w-full h-screen" style="background: rgba(17,24,39,0.5);">
            <div class="max-w-7xl mx-auto h-screen px-4 sm:px-6 lg:px-8">
              <div style="height: 100vh; display: flex; flex-direction: column; align-items: baseline; justify-content: center;">
                <transition
                    appear
                    @before-enter="beforeSlide"
                    @enter="slide"
                >
                  <img class="h-24" src="img/artexa.png" alt="artexa logo"/>
                </transition>
                <h1 class="mt-6 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
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
                    {{ $t('workheader.subtitle') }}
                  </p>
                </transition>
              </div>
            </div>
          </div>
        </div>



        <!-- Feature section with screenshot -->
        <div class="relative  pt-16 sm:pt-24 lg:pt-24">
          <div class="mx-auto max-w-md px-4 pt-10 text-center sm:px-6 sm:max-w-3xl lg:px-8 lg:max-w-7xl">
            <div>
              <h2 class="text-base font-semibold tracking-wider text-cyan-600 uppercase">{{ $t('workskills.overtitle') }}</h2>
              <p class="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
                {{ $t('workskills.title') }}
              </p>
              <p class="mt-5 max-w-prose mx-auto text-xl text-gray-500">
                {{ $t('workskills.subtitle') }}
              </p>
            </div>
            <div class="mt-12 shadow-2xl mb-24">
              <img class="rounded-lg ring-1 ring-black ring-opacity-5 h-full w-full" src="img/header_main.webp" alt="strategy_image" />
            </div>
          </div>
        </div>

        <!-- Feature section with grid -->
        <div class="relative bg-white py-16 sm:py-24 lg:py-24">
          <div class="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
            <h2 class="text-base font-semibold tracking-wider text-cyan-600 uppercase">{{ $t('workfeatures.overtitle') }}</h2>
            <p class="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
              {{ $t('workfeatures.title') }}
            </p>
            <p class="mt-5 max-w-prose mx-auto text-xl text-gray-500">
              {{ $t('workfeatures.subtitle') }}
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
              <p class="mt-3 text-3xl font-extrabold text-white">{{ $t('workmetrics.title') }}</p>
              <p class="mt-5 text-lg text-gray-300">{{ $t('workmetrics.subtitle') }}</p>
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
              <h2 class="text-base font-semibold tracking-wider text-cyan-600 uppercase">{{ $t('workBlogPosts.overtitle') }}</h2>
              <p class="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
                {{ $t('workBlogPosts.title') }}
              </p>
              <p class="mt-5 mx-auto max-w-prose text-xl text-gray-500">
                {{ $t('workBlogPosts.subtitle') }}
              </p>
            </div>
            <div class="mt-12 mx-auto max-w-md px-4 grid gap-8 sm:max-w-lg sm:px-6 lg:px-8 lg:grid-cols-3 lg:max-w-7xl">
              <div v-for="post in blogPosts" :key="post.id" class="flex flex-col rounded-lg shadow-lg overflow-hidden">
                <div class="flex-shrink-0 bg-white">
                  <img class="h-48 mx-auto object-cover" :src="post.image" alt="workflow slides" />
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
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import {CloudUploadIcon, CogIcon, MenuIcon, QrcodeIcon, ServerIcon, ShieldCheckIcon, XIcon, PencilAltIcon} from '@heroicons/vue/outline'
import { ChevronRightIcon, ExternalLinkIcon } from '@heroicons/vue/solid'

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

export default {

  computed:{
    features(){
      return [

        {
          name: this.$t('workfeatures.name1'),
          description: this.$t('workfeatures.description1'),
          icon: CloudUploadIcon,
        },
        {
          name: this.$t('workfeatures.name2'),
          description: this.$t('workfeatures.description2'),
          icon: PencilAltIcon,
        },
        {
          name: this.$t('workfeatures.name3'),
          description: this.$t('workfeatures.description3'),
          icon: QrcodeIcon,
        },
        {
          name: this.$t('workfeatures.name4'),
          description: this.$t('workfeatures.description4'),
          icon: ShieldCheckIcon,
        },
        {
          name: this.$t('workfeatures.name5'),
          description: this.$t('workfeatures.description5'),
          icon: CogIcon,
        },
        {
          name: this.$t('workfeatures.name6'),
          description: this.$t('workfeatures.description6'),
          icon: ServerIcon,
        },

      ]
    },

    metrics(){
      return[

        { id: 1, stat: '20 +', emphasis: this.$t('workmetrics.emphasis1'), rest: this.$t('workmetrics.rest1'), },
        { id: 2, stat: '9K +', emphasis: this.$t('workmetrics.emphasis2'), rest: this.$t('workmetrics.rest2'), },

      ]

    },

    blogPosts(){
      return[

        {
          id: 1,
          title: this.$t('workBlogPosts.title1'),
          category: { name: 'Stage 1' },
          image:'img/map.png',
          preview: this.$t('workBlogPosts.preview1'),
        },
        {
          id: 2,
          title: this.$t('workBlogPosts.title2'),
          category: { name: 'Stage 2' },
          image:'img/prototyping.png',
          preview: this.$t('workBlogPosts.preview2'),
        },
        {
          id: 3,
          title: this.$t('workBlogPosts.title3'),
          category: { name: 'Stage 3' },
          image: 'img/developer.png',
          preview: this.$t('workBlogPosts.preview3'),
        },

      ]
    }

  },


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
      beforeEnter,
      enter,
      slide,
      beforeSlide,
    }
  },

}
</script>
