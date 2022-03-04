<template>
  <div class="w-full h-screen bg-cover" style="background-image: url('img/team_header.webp');">
    <div class="w-full h-screen" style="background: rgba(17,24,39,0.5);">
      <div class="max-w-7xl mx-auto h-screen px-4 sm:px-6 lg:px-8">
        <div style="height: 100vh; display: flex; flex-direction: column; align-items: baseline; justify-content: center;">
          <transition appear @before-enter="beforeSlide" @enter="slide">
            <img class="h-24" src="img/artexa.png" alt="artexa logo"/>
          </transition>
          <transition appear @before-enter="beforeEnter" @enter="enter">
            <h1 class="mt-6 text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">Web Development Company</h1>
          </transition>
          <transition appear @before-enter="beforeEnter" @enter="enter">
            <p class="mt-6 max-w-3xl text-xl text-gray-300">Growth and learning is in our DNA</p>
          </transition>
        </div>
      </div>
    </div>
  </div>


  <div class="bg-white">
    <div class="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
      <div class="sm:flex sm:flex-col sm:align-center">

        <div class="text-center">
          <h2 class="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
            {{ $t('team.title') }}
          </h2>
          <p class="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4 ">
            {{ $t('team.subtitle') }}
          </p>
        </div>

      </div>
      <div class="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-2">
        <div v-for="tier in team" :key="tier.name" class="shadow-xl divide-y divide-gray-200 shadow-lg ">
          <div class="p-6">
            <img class="mx-auto h-56 w-56" :src="tier.imageSrc" :alt="tier.imageAlt" />
            <h2 class="text-lg leading-6 font-medium text-gray-900 mt-4">{{ tier.name }}</h2>
            <p class="text-artexa-teal-400 text-xs">{{ tier.role }}</p>
            <p class="mt-6 text-sm text-gray-500">{{ tier.description }}</p>
          </div>
          <div class="pt-2 pb-4 px-6">
            <ul role="list" class="flex justify-center space-x-5 pl-2 mt-4">
              <li>
                <a :href="tier.linkedinUrl" target="_blank" class="text-gray-400 hover:text-blue-700">
                  <span class="sr-only">LinkedIn</span>
                  <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clip-rule="evenodd" />
                  </svg>
                </a>
              </li>
              <li>
                <a :href="tier.mailTo" target="_blank" class="text-gray-400 hover:text-blue-700">
                  <span class="sr-only">MailTo</span>
                  <MailOpenIcon class="w-5 h-5"></MailOpenIcon>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>


  <div class="relative my-12">
    <div class="absolute inset-0 py-12">
      <img class="w-full h-full object-cover" src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&&sat=-100" alt="people at work" />
      <div class="absolute inset-0 bg-artexa-teal-400 mix-blend-multiply" aria-hidden="true" />
    </div>
    <div class="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
      <h1 class="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">{{ $t('banner.title') }}</h1>
      <p class="mt-6 text-xl text-indigo-100 max-w-3xl">{{ $t('banner.subtitle') }}</p>
    </div>
  </div>


  <div class="bg-white">
    <div class="max-w-7xl mx-auto py-12 sm:px-2 sm:py-24 lg:px-4">
      <div class="max-w-2xl mx-auto px-4 lg:max-w-none">
        <div class="grid grid-cols-1 items-center gap-y-10 gap-x-16 lg:grid-cols-2">
          <div>
            <h2 class="text-4xl font-extrabold tracking-tight text-gray-900">{{ $t('incentives.title') }}</h2>
            <p class="mt-4 text-gray-500">{{ $t('incentives.subtitle') }}</p>
          </div>
          <div class="aspect-w-3 aspect-h-2 bg-gray-100 rounded-lg overflow-hidden">
            <img src="https://tailwindui.com/img/ecommerce-images/incentives-07-hero.jpg" alt="e-commerce" class="object-center object-cover" />
          </div>
        </div>
        <div class="mt-16 grid grid-cols-1 gap-y-10 gap-x-8 lg:grid-cols-4 text-center">
          <div v-for="incentive in incentives" :key="incentive.name" class="sm:flex lg:block">
            <div class="sm:flex-shrink-0 items-center">
              <img class="w-16 h-16 mx-auto" :src="incentive.imageSrc" alt="more than a web agency image" />
            </div>
            <div class="mt-4 sm:mt-0 sm:ml-6 lg:mt-6 lg:ml-0">
              <h3 class="text-sm font-medium text-gray-900">
                {{ incentive.name }}
              </h3>
              <p class="mt-2 text-sm text-gray-500">
                {{ incentive.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import gsap from "gsap";
import { MailOpenIcon } from '@heroicons/vue/outline'


export default {

  computed:{
    team(){
      return[

        {
          name: 'Bryan Gustin',
          role: 'CEO - Fullstack developer',
          imageSrc:
              'img/bryanfond.png',
          imageAlt:"Bryan Gustin photo",
          description:this.$t('team.description1'),
          linkedinUrl: 'https://www.linkedin.com/in/bryangustin/',
          mailTo:'mailto:bryan.gustin@artexa.agency?subject=Mail from Artexa.Agency',
        },
        {
          name: 'Gianluca Tiengo',
          role: 'Project Manager - Fullstack developer',
          imageSrc:
              'img/gian.jpg',
          imageAlt:"Gianluca Tiengo photo",
          description:this.$t('team.description2'),
          linkedinUrl: 'https://www.linkedin.com/in/gianluca-tiengo/',
          mailTo:'mailto:gianluca.tiengo@artexa.agency?subject=Mail from Artexa.Agency',
        },
        {
          name: 'Ahmad Hendi',
          role: 'Content Creator - Community Manager',
          imageSrc:
              'img/amhad.webp',
          imageAlt:"Ahmad Hendi photo",
          description:this.$t('team.description3'),
          linkedinUrl: 'https://www.linkedin.com/in/ahmad-hendi-/',
          mailTo:'mailto:ahmad.hendi@artexa.agency?subject=Mail from Artexa.Agency',
        },
        {
          name: 'Didier Cadieux',
          role: 'Sales Manager',
          imageSrc:
              'img/sales.webp',
          imageAlt:"Didier Cadieux",
          description:this.$t('team.description4'),
          linkedinUrl: '',
          mailTo:'mailto:sales@artexa.agency?subject=Mail from Artexa.Agency',
        },

      ]
    },
    incentives(){
      return[

        {
          name: this.$t('incentives.name1'),
          imageSrc: 'img/idea.png',
          description: this.$t('incentives.description1'),
        },
        {
          name: this.$t('incentives.name2'),
          imageSrc: 'img/data-analysis.png',
          description: this.$t('incentives.description2'),
        },
        {
          name: this.$t('incentives.name3'),
          imageSrc: 'img/sketch.png',
          description:this.$t('incentives.description3'),
        },
        {
          name: this.$t('incentives.name4'),
          imageSrc: 'img/teamwork.png',
          description:this.$t('incentives.description4'),
        },

      ]
    }

  },

  components:{
    MailOpenIcon,
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
      gsap.from(el,{
        rotation: 180
      })
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
      beforeEnter,
      enter,
      slide,
      beforeSlide,
    }
  },

}


</script>
