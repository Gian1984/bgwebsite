<template>
  <div class="w-full h-screen bg-cover" style="background-image: url('img/responsivetest.webp');">
    <div class="w-full h-screen" style="background: rgba(17,24,39,0.5);">
      <div class="max-w-7xl mx-auto h-screen px-4 sm:px-6 lg:px-8">
        <div style="height: 100vh; display: flex; flex-direction: column; align-items: baseline; justify-content: center;">
          <transition appear @before-enter="beforeSlide" @enter="slide">
            <img class="h-24" src="img/artexa.png" alt="artexa logo"/>
          </transition>
          <transition appear @before-enter="beforeEnter" @enter="enter">
            <h1 class="mt-6 text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl text1">Web Development Company</h1>
          </transition>
          <transition appear @before-enter="beforeEnter" @enter="enter">
            <p class="mt-6 max-w-3xl text-xl text-gray-300 text2 ">The upgrade of your business starts with your website.</p>
          </transition>
          <transition appear @before-enter="beforeEnter" @enter="enter">
            <a href="/contact" class="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-artexa-white bg-artexa-teal-400 hover:bg-artexa-red focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <span>{{ $t("header.button") }} </span>
              <ArrowCircleRightIcon class="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
            </a>
          </transition>
        </div>
      </div>
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
          {{$t('homeposts.title')}}
        </h2>
        <p class="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4 ">
          {{$t('homeposts.subtitle')}}
        </p>
      </div>
      <div class="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
        <div v-for="post in posts" :key="post.title" class="flex flex-col rounded-lg shadow-lg overflow-hidden">
          <div class="flex-shrink-0">
            <img class="h-48 mx-auto mt-10" :src="post.imageUrl" alt="our skills" />
          </div>
          <div class="flex-1 bg-white p-6 flex flex-col justify-between">
            <div class="flex-1">
              <div class="block mt-2">
                <p class="text-xl font-semibold text-gray-900">
                  {{ post.title }}
                </p>
                <p class="mt-3 text-base text-gray-500">
                  {{ post.description }}
                </p>
              </div>
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
            {{$t('tech.title')}}
          </h2>
          <p class="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4 px-4">
            {{$t('tech.subtitle')}}
          </p>
        </div>
        <div class="relative  sm:rounded-2xl sm:overflow-hidden hidden md:block">
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


        <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 md:hidden">
          <div class="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
            <div v-for="category in galleries" :key="category.name" class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
              <img class="h-24 object-center object-cover" :src="category.imageSrc" alt="tech illustration" />
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
        <h2 class="text-base font-semibold text-teal-500 uppercase tracking-wide text4">{{ $t("homefeatures.titleover") }}</h2>
        <p class="mt-2 text-3xl font-extrabold text-gray-900 text5">{{ $t("homefeatures.title") }}</p>
        <p class="mt-4 text-lg text-gray-500">{{ $t("homefeatures.subtitle") }}</p>
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
import { CheckIcon, ArrowCircleRightIcon } from '@heroicons/vue/outline'
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

  computed: {

    posts(){
      return[
        // {
        //   title: this.$t('homeposts.title1'),
        //   description: this.$t('homeposts.description1'),
        //   imageUrl: 'img/scoping.png',
        // },
        // {
        //   title: this.$t('homeposts.title2'),
        //   description:this.$t('homeposts.description2'),
        //   imageUrl: 'img/design.png',
        // },
        // {
        //   title: this.$t('homeposts.title3'),
        //   description:this.$t('homeposts.description3'),
        //   imageUrl: 'img/coder.png',
        // },
        {
          title: this.$t('homeposts.title4'),
          description:this.$t('homeposts.description4'),
          imageUrl: 'img/vitrine.png',
        },
        {
          title: this.$t('homeposts.title5'),
          description:this.$t('homeposts.description5'),
          imageUrl: 'img/ecommerce.png',
        },
        {
          title: this.$t('homeposts.title6'),
          description:this.$t('homeposts.description6'),
          imageUrl: 'img/coder.png',
        },
      ]
    },


    features() {
      return [

        {
          name: this.$t('homefeatures.name1'),
          description: this.$t('homefeatures.description1'),
        },
        {
          name: this.$t('homefeatures.name2'),
          description: this.$t('homefeatures.description2') },
        {
          name: this.$t('homefeatures.name3'),
          description: this.$t('homefeatures.description3'),
        },
        {
          name: this.$t('homefeatures.name4'),
          description: this.$t('homefeatures.description4')
        },
        {
          name: this.$t('homefeatures.name5') ,
          description: this.$t('homefeatures.description5')
        },
        {
          name: this.$t('homefeatures.name6'),
          description: this.$t('homefeatures.description6')
        },

      ]
    },
  },



  components: {
    ArrowCircleRightIcon,
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
        duration: 1.5,
        onComplete: done,
        delay: el.dataset.index * 0.5,
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
        delay: el.dataset.index * 0.1,
        rotation: 360,
      })
    }


    return {
      galleries,
      beforeEnter,
      enter,
      slide,
      beforeSlide,
    }
  },
}
</script>





