<template>
  <div class="w-full h-screen bg-cover" style="background-image: url('img/header_one.webp');">
    <div class="w-full h-screen" style="background: rgba(17,24,39,0.5);">
      <div class="max-w-7xl mx-auto h-screen px-4 sm:px-6 lg:px-8">
        <div style="height: 100vh; display: flex; flex-direction: column; align-items: baseline; justify-content: center;">
          <transition appear @before-enter="beforeSlide" @enter="slide">
            <img class="h-24" src="img/artexa.png"/>
          </transition>
          <h1 class="mt-6 text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">Web Development Company</h1>
          <p class="mt-6 max-w-3xl text-xl text-gray-300">We support you in your digital transformation.</p>
        </div>
      </div>
    </div>
  </div>

  <div class="bg-gray-50">
    <div class="max-w-7xl mx-auto py-12 px-4 sm:py-12 sm:px-6 lg:px-8">
      <div class="sm:items-baseline text-center">
        <h2 class="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
          {{ $t('teamcore.title') }}
        </h2>
        <p class="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4 ">
          {{ $t('teamcore.subtitle') }}
        </p>
      </div>

      <div class="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:grid-rows-2 sm:gap-x-6 lg:gap-8">
        <div class="group aspect-w-2 aspect-h-1 overflow-hidden sm:aspect-h-1 sm:aspect-w-1 sm:row-span-2">
          <img src="img/boutique.png" alt="botique images" class="object-center object-cover group-hover:opacity-75" />
          <div aria-hidden="true" class="bg-gradient-to-b from-transparent to-black opacity-50" />
        </div>
        <div class="group aspect-w-2 aspect-h-1 overflow-hidden sm:relative sm:aspect-none sm:h-full">
          <img src="img/light.png" alt="team_light" class="object-center object-cover group-hover:opacity-75 sm:absolute sm:inset-0 sm:w-full sm:h-full" />
          <div aria-hidden="true" class="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0" />
          <div class="p-3 flex items-end sm:absolute sm:inset-0">
            <div>
              <h3 class="font-semibold text-white">
                <p>
                  <span class="absolute inset-0" />
                </p>
              </h3>
              <p aria-hidden="true" class="mt-1 text-sm sm:text-gray-400 lg:text-gray-300">{{ $t('teamcore.desc1') }}</p>
            </div>
          </div>
        </div>
        <div class="group aspect-w-2 aspect-h-1 overflow-hidden sm:relative sm:aspect-none sm:h-full">
          <img src="https://tailwindui.com/img/ecommerce-images/home-page-03-category-02.jpg" alt="Walnut desk organizer set with white modular trays, next to porcelain mug on wooden desk." class="object-center object-cover group-hover:opacity-75 sm:absolute sm:inset-0 sm:w-full sm:h-full" />
          <div aria-hidden="true" class="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0" />
          <div class="p-3 flex items-end sm:absolute sm:inset-0">
            <div>
              <h3 class="font-semibold text-white">
                  <span class="absolute inset-0" />
              </h3>
              <p aria-hidden="true" class="mt-1 text-sm sm:text-gray-400 lg:text-gray-300">{{ $t('teamcore.desc2') }}</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>

  <div class="bg-gray-50 py-12 sm:px-2 sm:py-12">
    <h2 class="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl text-center">{{ $t('perks.title') }}</h2>
    <p class="mt-3 mb-10 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4 text-center px-4">
      {{ $t('perks.subtitle') }}
    </p>
    <div class="max-w-7xl mx-auto lg:px-4">
      <div class="max-w-2xl mx-auto px-4 grid grid-cols-1 gap-y-12 gap-x-8 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
        <div v-for="perk in perks" :key="perk.name" class="sm:flex">
          <div class="sm:flex-shrink-0">
            <div class="flow-root">
              <img class="w-28 h-24 mx-auto" :src="perk.imageSrc" alt="" />
            </div>
          </div>
          <div class="mt-3 sm:mt-0 sm:ml-3">
            <h3 class="text-sm font-medium text-gray-900">
              {{ perk.name }}
            </h3>
            <p class="mt-2 text-sm text-gray-500">
              {{ perk.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>



  <div class="bg-gray-50">
    <div class="max-w-7xl mx-auto py-12 px-4 sm:py-12 sm:px-6 lg:px-8">
      <div class="sm:items-baseline text-center">
        <h2 class="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
          {{ $t('slides.title') }}
        </h2>
        <p class="mt-3 mb-10 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4 ">
          {{ $t('slides.subtitle') }}
        </p>
      </div>
      <div class="box-content py-2 relative ">
      <Carousel :items-to-show="2.5" :wrap-around="true">
        <Slide v-for="slide in slides" :key="slide" class="relative p-6 flex flex-col overflow-hidden " style=" height: 530px !important; width: 530px !important;" >
          <span aria-hidden="true" class="absolute inset-0" >
            <img :src="slide.imageSrc" alt="" class=" .carousel__item space-x-4" />
          </span>
          <span class="relative mt-64 text-right text-2xl font-bold text-white uppercase ml-64">{{ slide.name }}</span>
          <span class="relative text-center text-sm text-white ml-64">{{ slide.desc }}</span>
        </Slide>
        <template #addons>
          <Navigation />
        </template>
      </Carousel>
      </div>
    </div>
  </div>


</template>

<script>
import gsap from 'gsap'
import { Carousel, Navigation, Slide } from 'vue3-carousel';

import 'vue3-carousel/dist/carousel.css';

export default {

  name: 'WrapAround',
  components: {
    Carousel,
    Slide,
    Navigation,
  },

  computed: {
    slides(){
      return[

        {
          imageSrc:"img/ambition.png",
          name:this.$t('slides.name1'),
          desc:this.$t('slides.desc1')
        },
        {
          imageSrc:"img/creativity.webp",
          name:this.$t('slides.name2'),
          desc:this.$t('slides.desc2')
        },
        {
          imageSrc:"img/fun.webp",
          name:this.$t('slides.name3'),
          desc:this.$t('slides.desc3')
        },
        {
          imageSrc:"img/integrity.png",
          name:this.$t('slides.name4'),
          desc:this.$t('slides.desc4')
        },
        {
          imageSrc:"img/pride.png",
          name:this.$t('slides.name5'),
          desc:this.$t('slides.desc5')
        },

      ]
    },

    perks(){
      return[

        {
          name: this.$t('perks.name1'),
          imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-delivery-light.svg',
          description: this.$t('perks.description1'),
        },
        {
          name: this.$t('perks.name2'),
          imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-warranty-light.svg',
          description:this.$t('perks.description2'),
        },
        {
          name: this.$t('perks.name3'),
          imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-chat-light.svg',
          description:this.$t('perks.description3'),
        },
        {
          name: this.$t('perks.name4'),
          imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-planet-light.svg',
          description:this.$t('perks.description4'),
        },

      ]
    },

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
    beforeEnter,
    enter,
    slide,
    beforeSlide,
    }
  },

}
</script>

<style>
.carousel__item {
  /*height: 200px !important;*/
  /*width: 200px !important;*/
  /*background-color: red;*/
  /*color: white;*/
  /*font-size: 20px;*/
  /*border-radius: 8px;*/
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
}

.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
  background: #42b983;
}


</style>
