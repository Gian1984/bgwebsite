<template>
  <div class="relative pb-32 bg-gray-800 pt-40">
    <div class="absolute inset-0">
      <img class="w-full h-full object-cover" src="img/header_one.webp" />
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





  <div class="bg-gray-50">
    <div class="max-w-7xl mx-auto py-12 px-4 sm:py-12 sm:px-6 lg:px-8">
      <div class="sm:items-baseline text-center">
        <h2 class="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
          About US.
        </h2>
        <p class="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4 ">
          We are talented creatives that take business seriously.
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
              <p aria-hidden="true" class="mt-1 text-sm sm:text-gray-400 lg:text-gray-300">Our team of experts is made up of creatives with technical know-how, strategists who think outside the box, and developers who push innovation.</p>
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
              <p aria-hidden="true" class="mt-1 text-sm sm:text-gray-400 lg:text-gray-300">You will find our team working across Creative Web Design, Web Development, Branding, and Digital Marketing.</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>

  <div class="bg-gray-50 py-12 sm:px-2 sm:py-12">
    <h2 class="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl text-center">Our core values</h2>
    <p class="mt-3 mb-10 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4 text-center">
      To get a sense of what our core values are, we ask ourself what bring us the most joy, or what we couldn’t live without. What gives us life meaning or what do we want to achieve?
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
          Why Choose Artexa?
        </h2>
        <p class="mt-3 mb-10 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4 ">
          We are talented creatives that take business seriously.
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

const perks = [
  {
    name: 'Move fast',
    imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-delivery-light.svg',
    description:
        "We are always looking for innovation and the best solutions for our customers. In a world that moves at the speed of a click, we try to give maximum importance to your needs in the shortest time possible.",
  },
  {
    name: 'Constant commitment',
    imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-warranty-light.svg',
    description:
        "We know how important is the presence on the web for our customers, and that's why we are committed every day to ensure the best result.",
  },
  {
    name: '6/7 Customer Support',
    imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-chat-light.svg',
    description:
        'We understand that when your product arrives you might not particularly like it, when something goes wrong we always try to move as quickly as possible to respond and resolve any issues or needs.',
  },
  {
    name: 'For the planet',
    imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-planet-light.svg',
    description:
        "Like you, we love the planet, and so we've pledged 1% of all sales to the preservation and restoration of the natural environment.",
  },
]

const slides =[
  {
    imageSrc:"img/ambition.png",
    name:"Ambition",
    desc:"We approach every challenge with energy and vigour. We come up with innovative solutions and we’re not afraid to think big"
  },
  {
    imageSrc:"img/creativity.webp",
    name:"Creativity",
    desc:"Every member of our team has a creative streak. This is at the heart of what we do and central to our core values."
  },
  {
    imageSrc:"img/fun.webp",
    name:"Fun",
    desc:"Our working environment is relaxed and light-hearted. We listen to good tunes and eat good biscuits."
  },
  {
    imageSrc:"img/integrity.png",
    name:"Integrity",
    desc:"We care about our work, our clients and our people. We treat everyone with honesty and respect and expect to be treated in the same way."
  },
  {
    imageSrc:"img/pride.png",
    name:"Pride",
    desc:"We take pride in our work and sign every piece of it. We strive for perfection in everything we do."
  },
]

export default {

  name: 'WrapAround',
  components: {
    Carousel,
    Slide,
    Navigation,
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
    perks,
    slides,
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
