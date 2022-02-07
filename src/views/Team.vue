<template>
  <div class="relative pb-32 bg-gray-800 pt-40">
    <div class="absolute inset-0">
      <img class="w-full h-full object-cover" src="img/header_one.png" />
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
      <h1 class="mt-6 text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">Web Development Company</h1>
      <p class="mt-6 max-w-3xl text-xl text-gray-300">Take the software path to your digital future.</p>
    </div>
  </div>


<div class="bg-white mt-12">
  <div class="mx-auto py-12 px-4 sm:px-6 lg:px-8 lg:py-12">
    <div class="space-y-12">
      <div class="text-center">
        <h2 class="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
          Websites & Apps
        </h2>
        <p class="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4 ">
          We are a world class digital agency, who can develop a wide range of websites such as brochure, e-commerce and multilingual websites for B2B and B2C audiences. All the websites we create are responsive websites which automatically adjust to the device they are being viewed on. We create custom websites that are linked to a back end that can be easily updated by you or your team.
        </p>
      </div>
      <ul role="list" class="space-y-4 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:grid-cols-2 lg:gap-24">
        <li v-for="person in team" :key="person.name" class="py-10 px-6 bg-gray-200 text-center xl:px-10 xl:text-left">
          <div class="space-y-6 xl:space-y-10">
            <img class="mx-auto h-56 w-56 xl:w-80 xl:h-80" :src="person.imageSrc" :alt="person.imageAlt" />
            <div class="space-y-2 xl:flex xl:items-center xl:justify-between">
              <div class="font-medium text-lg leading-6 space-y-1">
                <h2 class="max-w-lg text-xl text-black sm:max-w-3xl">{{ person.name }}</h2>
                <p class="text-indigo-400 pb-10">{{ person.role }}</p>
                <p class="hidden lg:block max-w-lg text-base text-gray-700 sm:max-w-3xl pr-2  lg:border-r lg:border-gray-700 text-left">
                  {{ person.description }}
                </p>
                <p class="lg:hidden max-w-lg text-base text-gray-700 sm:max-w-3xl pr-2 pt-2 pb-2 border-b border-gray-700 text-left">
                  {{ person.description }}
                </p>
              </div>

              <ul role="list" class="flex justify-center space-x-5 pl-2 mt-4">
                <li>
                  <a :href="person.linkedinUrl" class="text-gray-400 hover:text-blue-700">
                    <span class="sr-only">LinkedIn</span>
                    <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clip-rule="evenodd" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</div>
</template>

<script>


import gsap from "gsap";

const team = [
  {
    name: 'Bryan Gustin',
    role: 'Founder',
    imageSrc:
        'img/bryan.jpeg',
    imageAlt:"Bryan Gustin photo",
    description:"Having been brought up in a small community, I started to ask myself about other ways of living at an early age. At 18, I started to travel. New cultures, new landscapes and languages soon sparked my curiosity exponentially. Curiosity became passion. Slowly, technologies started to fascinate me, but I didn't realise it immediately. In the meantime, I tried to find a profession that suited me, a profession in which I could find myself. All I knew is that I wanted freedom to move and live where I wanted, to continue to learn more and live new experiences. Whilst brainstorming with my close ones, I realised coding is a language and a sub-culture in itself, which I could learn, and apply all around the world while earning my life. As I became conscious of that, my career path became clear... to learn and pursue a career as a web developper.",
    linkedinUrl: 'https://www.linkedin.com/in/bryangustin/',
  },
  {
    name: 'Gianluca Tiengo',
    role: 'Co-Founder',
    imageSrc:
        'img/gian.jpg',
    imageAlt:"Gianluca Tiengo photo",
    description:
        "I'm a web developer from Turin, Italy and currently living in Brussels. I enjoy building everything from small websites to rich interactive apps.\n" +
        "I create successful responsive website that are fast, easy to use, and build with the best practices. The main area of expertise is full-stack development HTML, CSS, JS, PHP, building small and medium web apps, animations. I have also experience with popular open-source CMS like Wordpress.\n" +
        "My favorite frameworks are VueJs / Laravel / Tailwnd, but in this area learning something new is part of everyday life.\n" +
        "My approach to website development fuses creativity, technology and data analysis, giving you the platform you need to reach new audiences and engage your customers.",
    linkedinUrl: 'https://www.linkedin.com/in/gianluca-tiengo/',
  },
]

export default {

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
      team,
      beforeEnter,
      enter,
      slide,
      beforeSlide,
    }
  },

}

</script>
