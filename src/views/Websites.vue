<template>
  <div class="relative bg-white overflow-hidden">
    <div class="max-w-7xl mx-auto">
      <div class="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
        <svg class="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          <polygon points="50,0 100,0 50,100 0,100" />
        </svg>

        <Popover>
          <div class="relative pt-6 px-4 sm:px-6 lg:px-8">
          </div>
        </Popover>

        <main class="mt-10 mx-auto max-w-7xl px-4 pt-12 sm:px-6 md:pt-16 lg:pt-20 lg:px-8 xl:pt-28">
          <div class="sm:text-center lg:text-left">
            <img class="h-24 mb-6 sm:max-w-xl mx-auto lg:mx-0 xl:mx-0" src="img/artexa.png" alt="artexa logo"/>
            <h1 class="text-center lg:text-left xl:text-left text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span class="block xl:inline">{{ $t('websiteshero.title') }}</span>
            </h1>
            <p class="text-center lg:text-left xl:text-left mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">{{ $t('websiteshero.subtitle') }}</p>
          </div>
        </main>
      </div>
    </div>
    <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
      <img class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src="img/websites1.jpg" alt="computer"/>
    </div>
  </div>


  <div class="relative z-10 pt-16 pb-8 px-4 sm:px-6 lg:pt-24 lg:pb-12 lg:px-8">
    <!-- <div class="absolute inset-0">
      <div class="bg-white h-1/3 sm:h-2/3" />
    </div> -->
    
    <div class="relative max-w-7xl mx-auto">
      <div class="text-center relative z-20">
        <h2 class="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">{{ $t('websitesguide.title') }}</h2>
        <p class="mt-3 max-w-4xl mx-auto text-xl text-gray-500 sm:mt-4">{{ $t('websitesguide.subtitle') }}</p>
      </div>
     
      <svg class="customsvgright hidden lg:block absolute z-0" id="sw-js-blob-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
            <stop id="stop1" stop-color="rgba(81, 162, 156, 1)" offset="0%"></stop>
            <stop id="stop2" stop-color="rgba(118, 255, 245, 1)" offset="100%"></stop>
          </linearGradient>
        </defs>
        <path 
            fill="url(#sw-gradient)" 
            d="M27.9,-26.7C35.6,-20.3,40.9,-10.1,39.2,-1.7C37.5,6.8,29,13.6,21.3,17.1C13.6,20.7,6.8,20.9,-1.3,22.2C-9.5,23.6,-18.9,26,-24.9,22.5C-30.9,18.9,-33.4,9.5,-32,1.4C-30.6,-6.7,-25.3,-13.3,-19.3,-19.8C-13.3,-26.3,-6.7,-32.6,1.7,-34.3C10.1,-36.1,20.3,-33.2,27.9,-26.7Z" 
            width="100%" 
            height="100%" 
            transform="translate(50 50)" 
            stroke-width="0" 
            style="transition: all 0.3s;" 
            stroke="url(#sw-gradient)"
        >
        </path>
      </svg>
      <svg class="customsvgleft hidden lg:block absolute z-0" id="sw-js-blob-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
            <stop id="stop1" stop-color="rgba(81, 162, 156, 1)" offset="0%"></stop>
            <stop id="stop2" stop-color="rgba(118, 255, 245, 1)" offset="100%"></stop>
          </linearGradient>
        </defs>
        <path 
            fill="url(#sw-gradient)" 
            d="M27.9,-26.7C35.6,-20.3,40.9,-10.1,39.2,-1.7C37.5,6.8,29,13.6,21.3,17.1C13.6,20.7,6.8,20.9,-1.3,22.2C-9.5,23.6,-18.9,26,-24.9,22.5C-30.9,18.9,-33.4,9.5,-32,1.4C-30.6,-6.7,-25.3,-13.3,-19.3,-19.8C-13.3,-26.3,-6.7,-32.6,1.7,-34.3C10.1,-36.1,20.3,-33.2,27.9,-26.7Z" 
            width="100%" 
            height="100%" 
            transform="translate(50 50)" 
            stroke-width="0" 
            style="transition: all 0.3s;" 
            stroke="url(#sw-gradient)"
        >
        </path>
      </svg>
  
      <div class="relative z-10 mt-20 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
        <div v-for="post in posts" :key="post.title" class="flex flex-col shadow-lg overflow-hidden">
          <div class="flex-shrink-0">
            <img class="h-48 w-full object-contain object-center" :src="post.imageUrl" :alt="post.imageAlt" />
          </div>
          <div class="flex-1 bg-white p-6 flex flex-col justify-between">
            <div class="flex-1">
              <div class="mt-2">
                <p class="text-center lg:text-left xl:text-left text-xl font-semibold text-gray-900">
                  {{ post.title }}
                </p>
                <p class="text-center lg:text-left xl:text-left mt-3 text-base text-gray-500">
                  {{ post.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div></div>
        <button type="button" class="mt-3 inline-flex justify-center items-center px-36 py-3 border border-transparent shadow-sm text-base text-center font-medium text-white bg-artexa-red hover:bg-artexa-teal-300 focus:outline-none focus:ring-none focus:ring-offset-0 focus:ring-indigo-500">
            {{ $t('websitesguide.button') }}
            <MailIcon class="ml-3 -mr-1 h-5 w-5" aria-hidden="true" />
        </button>
      </div>
    </div>
  </div>
  

  <!-- Blog section -->
        <div class="relative z-20 py-8">
          <div class="max-w-7xl mx-auto relative">
            <div class="text-center mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl mb-8">
              <p class="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
                {{ $t('websitesprocess.title') }}
              </p>
              <p class="mt-5 mx-auto max-w-prose text-xl text-gray-500">
                {{ $t('websitesprocess.subtitle') }}
              </p>
            </div>
            <!-- TIMELINE -->
            <ol class="items-center justify-center flex lg:flex-row xl:flex-row flex-col pt-12 pb-16 px-4 sm:pt-16 sm:px-6 lg:px-8">
                <li v-for="step in steps" :key="step.id" class="relative mb-6 sm:mb-0">
                    <div class="flex items-center">
                        <div class="flex z-10 justify-center items-center w-32 h-32 shrink-0">
                            <img class="w-32 h-32 object-center object-contain" viewBox="0 0 20 20" :src="step.imageUrl" :alt="step.imageAlt">
                        </div>
                        <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                    </div>
                    <div class="mt-3 sm:pr-8">
                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">{{ step.title }}</h3>
                        <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{{ step.subTitle }}</time>
                        <p class="text-base font-normal text-gray-500 dark:text-gray-400">{{ step.description }}</p>
                    </div>
                </li>
            </ol>
          </div>
        </div>

        <div class="bg-white">
            <div class="max-w-2xl mx-auto pb-24 px-4 sm:px-6 sm:pb-32 lg:max-w-7xl lg:px-8">
                <div class="max-w-3xl mx-auto text-center">
                    <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">{{ $t('websiteswork.title') }}</h2>
                </div>

                <div class="mt-16 space-y-16">
                    <div v-for="(feature, featureIdx) in features" :key="feature.name" class="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-x-8 sm:gap-y-4 lg:items-center">
                        <div :class="[featureIdx % 2 === 0 ? 'lg:col-start-6 xl:col-start-5' : 'lg:col-start-1', 'flex-auto lg:row-start-1 lg:col-span-5 xl:col-span-8']">
                            <h3 class="mt-8 lg:mt-0 text-center lg:text-left text-2xl font-bold text-gray-900">{{ feature.name }}</h3>
                            <p class="text-center lg:text-left mt-2 text-base text-gray-500">{{ feature.description }}</p>
                        </div>
                        <div :class="[featureIdx % 2 === 0 ? 'lg:col-start-1' : 'lg:col-start-8 xl:col-start-9', 'mt-6 lg:mt-0 lg:row-start-1 lg:col-span-7 xl:col-span-4']">
                            <div class="aspect-w-5 aspect-h-2 relative z-0">
                                <img :src="feature.imageSrc" :alt="feature.imageAlt" class="w-1/2 lg:w-full mx-auto lg:mx-0 xl:mx-0 object-center object-contain z-20 relative" />
                                <svg class="customsvgimg hidden lg:block xl:block absolute z-10" id="sw-js-blob-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                                    <defs>
                                        <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
                                            <stop id="stop1" stop-color="rgba(81, 162, 156, 1)" offset="0%"></stop>
                                            <stop id="stop2" stop-color="rgba(118, 255, 245, 1)" offset="100%"></stop>
                                        </linearGradient>
                                    </defs>
                                    <path fill="url(#sw-gradient)" d="M25.8,-24.5C32.9,-18.6,37.9,-9.3,38.1,0.2C38.3,9.7,33.6,19.3,26.5,26.8C19.3,34.2,9.7,39.4,0.9,38.5C-7.8,37.5,-15.5,30.4,-23.6,23C-31.6,15.5,-39.8,7.8,-41.7,-1.9C-43.7,-11.6,-39.3,-23.3,-31.3,-29.2C-23.3,-35.1,-11.6,-35.2,-1.2,-34.1C9.3,-32.9,18.6,-30.4,25.8,-24.5Z" width="100%" height="100%" transform="translate(50 50)" stroke-width="0" style="transition: all 0.3s;" stroke="url(#sw-gradient)"></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

</template>

<script>
import { Popover} from '@headlessui/vue'
import { MailIcon } from '@heroicons/vue/solid'

export default {
    computed:{
        posts(){
            return[
                {
                    title: this.$t('websitesguide.name1'),
                    href: '/showcasewebsite',
                    description: this.$t('websitesguide.description1'),
                    imageUrl: 'img/websites.svg',
                    imageAlt: this.$t('websitesguide.imageAlt1'),
                },
                {
                    title: this.$t('websitesguide.name2'),
                    href: '/ecommerce',
                    description: this.$t('websitesguide.description2'),
                    imageUrl: 'img/e-commerce.svg',
                    imageAlt: this.$t('websitesguide.imageAlt2'),
                },
                {
                    title: this.$t('websitesguide.name3'),
                    href: '/intranet',
                    description: this.$t('websitesguide.description3'),
                    imageUrl: 'img/intranet.svg',
                    imageAlt: this.$t('websitesguide.imageAlt3'),
                },
            ]
        },
        steps(){
            return[
                {
                    title: this.$t('websitesprocess.name1'),
                    subTitle: this.$t('websitesprocess.step1'),
                    description: this.$t('websitesprocess.description1'),
                    imageUrl: 'img/conversation.svg',
                    imageAlt: this.$t('websitesprocess.imageAlt1'),
                },
                {
                    title: this.$t('websitesprocess.name2'),
                    subTitle: this.$t('websitesprocess.step2'),
                    description: this.$t('websitesprocess.description2'),
                    imageUrl: 'img/designer_life.svg',
                    imageAlt: this.$t('websitesprocess.imageAlt2'),
                },
                {
                    title: this.$t('websitesprocess.name3'),
                    subTitle: this.$t('websitesprocess.step3'),
                    description: this.$t('websitesprocess.description3'),
                    imageUrl: 'img/programming.svg',
                    imageAlt: this.$t('websitesprocess.imageAlt3'),
                },
            ]
        },
        features(){
            return[
                {
                    name: this.$t('websiteswork.title1'),
                    description: this.$t('websiteswork.preview1'),
                    imageSrc: 'img/code_review.svg',
                    imageAlt: this.$t('websiteswork.imageAlt1'),
                },
                {
                    name: this.$t('websiteswork.title2'),
                    description: this.$t('websiteswork.preview2'),
                    imageSrc: 'img/responsive.svg',
                    imageAlt: this.$t('websiteswork.imageAlt2'),
                },
                {
                    name: this.$t('websiteswork.title3'),
                    description: this.$t('websiteswork.preview3'),
                    imageSrc: 'img/finance.svg',
                    imageAlt: this.$t('websiteswork.imageAlt3'),
                },
            ]
        },
    },
  components: {
    Popover,
    MailIcon,
  },
  setup() {
    return {
    }
  },
}
</script>
<style>

    /*Mobile*/
    @media (min-width: 480px) and (max-width:767px){
        
    }

    /*Tablet*/
    @media (min-width: 768px) and (max-width:991px) {

    }

    /*Desktop*/
    @media (min-width: 992px) and (max-width:1279px){

    }

    /*Huge*/
    @media (min-width: 1280px) {
        .customsvgleft{
            width: 80vw; 
            top: -150px; 
            left: -730px;
        }
        .customsvgright{
            width: 80vw; 
            top: 0px; 
            right: -600px;
        }
        .customsvgimg{
            width: 30vw; 
            top: -100px; 
            left: -50px;
        }
    }

</style>