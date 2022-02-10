<template>
  <div>
    <!-- Header -->
    <div class="relative pb-32 bg-gray-800 pt-24">
      <div class="absolute inset-0">
        <img class="w-full h-full object-cover" src="img/header_tower.webp" alt="coding" />
        <div class="absolute inset-0 bg-artexa-white mix-blend-multiply" aria-hidden="true" />
      </div>
      <div class="relative max-w-7xl mx-auto py-32 px-4 sm:py-36 sm:px-6 lg:px-8">
        <transition
            appear
            @before-enter="beforeSlide"
            @enter="slide"
        >
          <img class="h-24" src="img/artexa.png"/>
        </transition>
        <h1 class="mt-4 text-4xl font-extrabold tracking-tight text-gray-700 md:text-5xl lg:text-6xl">Get in touch</h1>
        <p class="mt-6 max-w-3xl text-xl text-gray-600">We're here to help and answer any question you might have.<br>We look forward to hearing from you.</p>
      </div>
    </div>


    <main>
      <div class="bg-blue-gray-50 -mt-24 pb-8 relative z-10">
        <!-- Cards -->
        <section class="-mt-32 max-w-md mx-auto relative z-10 px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8" aria-labelledby="contact-heading">
          <h2 class="sr-only" id="contact-heading">Contact us</h2>
          <div class="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
            <div v-for="link in supportLinks" :key="link.name" class="flex flex-col bg-artexa-white rounded-2xl shadow-xl">
              <div class="flex-1 relative pt-16 px-6 pb-8 md:px-8">
                <div class="absolute top-0 p-5 inline-block bg-artexa-teal-400 rounded-xl shadow-lg transform -translate-y-1/2">
                  <component :is="link.icon" class="h-6 w-6 text-artexa-white" aria-hidden="true" />
                </div>
                <h3 class="text-xl font-medium text-blue-gray-900">{{ link.name }}</h3>
                <p class="mt-4 text-base text-blue-gray-500">{{ link.description }}</p>
              </div>
              <div class="p-6 bg-blue-gray-50 rounded-bl-2xl rounded-br-2xl md:px-8">
                <a :href="link.href" class="text-base font-medium text-artexa-teal-400 hover:text-teal-600">Contact us<span aria-hidden="true"> &rarr;</span></a>
              </div>
            </div>
          </div>
        </section>


        <!-- Form -->

        <main class="overflow-hidden">
          <!-- Header -->
          <div class="bg-artexa-white">
            <div class="py-24 lg:py-32">
              <div class="relative z-10 max-w-7xl mx-auto pl-4 pr-8 sm:px-6 lg:px-8">
                <h2 id="offices-heading" class="text-3xl font-extrabold text-warm-gray-900">Need more informations?</h2>
                <p class="mt-6 text-xl text-warm-gray-500 max-w-3xl">Our inbox is always open. Whether you have a question or just want to say hi, We'll try our best to get back to you as soon as possible!</p>
              </div>
            </div>
          </div>

          <!-- Contact section -->
          <section class="relative bg-artexa-white" aria-labelledby="contact-heading">
            <div class="absolute w-full h-1/2" aria-hidden="true" />
            <!-- Decorative dot pattern -->
            <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <svg class="absolute z-0 top-0 right-0 transform -translate-y-16 translate-x-1/2 sm:translate-x-1/4 md:-translate-y-24 lg:-translate-y-72" width="404" height="384" fill="none" viewBox="0 0 404 384" aria-hidden="true">
                <defs>
                  <pattern id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                    <rect x="0" y="0" width="4" height="4" class="text-artexa-white" fill="currentColor" />
                  </pattern>
                </defs>
                <rect width="404" height="384" fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)" />
              </svg>
            </div>
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div class="relative bg-artexa-white shadow-xl">
                <h2 id="contac-heading" class="sr-only">Contact us</h2>

                <div class="grid grid-cols-1 lg:grid-cols-3">
                  <!-- Contact information -->
                  <div class="relative overflow-hidden py-10 px-6 bg-gradient-to-b from-gray-700 to-gray-800 sm:px-10 xl:p-12">
                    <!-- Decorative angle backgrounds -->
                    <div class="absolute inset-0 pointer-events-none sm:hidden" aria-hidden="true">
                      <svg class="absolute inset-0 w-full h-full" width="343" height="388" viewBox="0 0 343 388" fill="none" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
                        <path d="M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z" fill="url(#linear1)" fill-opacity=".1" />
                        <defs>
                          <linearGradient id="linear1" x1="254.553" y1="107.554" x2="961.66" y2="814.66" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#fff" />
                            <stop offset="1" stop-color="#fff" stop-opacity="0" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <div class="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none sm:block lg:hidden" aria-hidden="true">
                      <svg class="absolute inset-0 w-full h-full" width="359" height="339" viewBox="0 0 359 339" fill="none" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
                        <path d="M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z" fill="url(#linear2)" fill-opacity=".1" />
                        <defs>
                          <linearGradient id="linear2" x1="192.553" y1="28.553" x2="899.66" y2="735.66" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#fff" />
                            <stop offset="1" stop-color="#fff" stop-opacity="0" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <div class="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none lg:block" aria-hidden="true">
                      <svg class="absolute inset-0 w-full h-full" width="160" height="678" viewBox="0 0 160 678" fill="none" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
                        <path d="M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z" fill="url(#linear3)" fill-opacity=".1" />
                        <defs>
                          <linearGradient id="linear3" x1="192.553" y1="325.553" x2="899.66" y2="1032.66" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#fff" />
                            <stop offset="1" stop-color="#fff" stop-opacity="0" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <h3 class="text-lg font-medium text-artexa-white">Contact information</h3>
                    <p class="mt-6 text-base text-grey-50 max-w-3xl text-artexa-white">Please fill out this form,<br>we'll get in touch shortly.</p>
                    <dl class="mt-8 space-y-6">
                      <dt><span class="sr-only">Phone number</span></dt>
                      <dd class="flex text-base text-artexa-white">
                        <PhoneIcon class="flex-shrink-0 w-6 h-6 text-artexa-white" aria-hidden="true" />
                        <span class="ml-3">+32 (491) 089-936</span>
                      </dd>
                      <dt><span class="sr-only">Email</span></dt>
                      <dd class="flex text-base text-artexa-white">
                        <MailIcon class="flex-shrink-0 w-6 h-6 text-artexa-white" aria-hidden="true" />
                        <span class="ml-3">info@artexa.agency</span>
                      </dd>
                    </dl>
                    <ul role="list" class="mt-8 flex space-x-12">
                      <li>
                        <a class="text-artexa-white hover:text-gray-100" href="#">
                          <span class="sr-only">Facebook</span>
                          <svg class="w-7 h-7" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" />
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a class="text-artexa-white hover:text-gray-100" href="#">
                          <span class="sr-only">GitHub</span>
                          <svg class="w-7 h-7" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a class="text-artexa-white hover:text-gray-100" href="#">
                          <span class="sr-only">Twitter</span>
                          <svg class="w-7 h-7" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </div>

                  <!-- Contact form -->
                  <div class="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12">
                    <h3 class="text-lg font-medium text-warm-gray-900">Send us a message</h3>
                    <form action="#" method="POST" class="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                      <div>
                        <label for="first-name" class="block text-sm font-medium text-warm-gray-900">First name</label>
                        <div class="mt-1">
                          <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="py-3 px-4 block w-full shadow-sm text-warm-gray-900 focus:ring-artexa-teal-400 focus:border-artexa-teal-400 border-artexa-white rounded-md" />
                        </div>
                      </div>
                      <div>
                        <label for="last-name" class="block text-sm font-medium text-warm-gray-900">Last name</label>
                        <div class="mt-1">
                          <input type="text" name="last-name" id="last-name" autocomplete="family-name" class="py-3 px-4 block w-full shadow-sm text-warm-gray-900 focus:ring-artexa-teal-400 focus:border-artexa-teal-400 border-artexa-white rounded-md" />
                        </div>
                      </div>
                      <div>
                        <label for="email" class="block text-sm font-medium text-warm-gray-900">Email</label>
                        <div class="mt-1">
                          <input id="email" name="email" type="email" autocomplete="email" class="py-3 px-4 block w-full shadow-sm text-warm-gray-900 focus:ring-artexa-teal-400 focus:border-artexa-teal-400 border-artexa-white rounded-md" />
                        </div>
                      </div>
                      <div>
                        <div class="flex justify-between">
                          <label for="phone" class="block text-sm font-medium text-warm-gray-900">Phone</label>
                          <span id="phone-optional" class="text-sm text-warm-gray-500">Optional</span>
                        </div>
                        <div class="mt-1">
                          <input type="text" name="phone" id="phone" autocomplete="tel" class="py-3 px-4 block w-full shadow-sm text-warm-gray-900 focus:ring-artexa-teal-400 focus:border-artexa-teal-400 border-artexa-white rounded-md" aria-describedby="phone-optional" />
                        </div>
                      </div>
                      <div class="sm:col-span-2">
                        <label for="subject" class="block text-sm font-medium text-warm-gray-900">Subject</label>
                        <div class="mt-1">
                          <input type="text" name="subject" id="subject" class="py-3 px-4 block w-full shadow-sm text-warm-gray-900 focus:ring-artexa-teal-400 focus:border-artexa-teal-400 border-artexa-white rounded-md" />
                        </div>
                      </div>
                      <div class="sm:col-span-2">
                        <div class="flex justify-between">
                          <label for="message" class="block text-sm font-medium text-warm-gray-900">Message</label>
                          <span id="message-max" class="text-sm text-warm-gray-500">Max. 500 characters</span>
                        </div>
                        <div class="mt-1">
                          <textarea id="message" name="message" rows="4" class="py-3 px-4 block w-full shadow-sm text-warm-gray-900 focus:ring-gray-500 focus:border-gray-500 border border-artexa-white rounded-md" aria-describedby="message-max" />
                        </div>
                      </div>
                      <div class="sm:col-span-2 sm:flex sm:justify-end">
                        <button type="submit" class="mt-2 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-artexa-white bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-artexa-teal-400 sm:w-auto">
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <!-- Contact grid -->
          <section aria-labelledby="offices-heading">
            <div class="relative pb-32 bg-gray-800 mt-32">
              <div class="absolute inset-0">
                <img class="w-full h-full object-cover" src="img/where.webp" alt="map of where we are" />
                <div class="absolute inset-0 bg-artexa-white mix-blend-multiply" aria-hidden="true" />
              </div>
              <div class="relative max-w-7xl mx-auto py-32 px-4 sm:py-36 sm:px-6 lg:px-8">
              <h2 id="office-heading" class="text-3xl font-extrabold text-artexa-white">OUR OFFICE</h2>
              <p class="mt-6 text-lg text-gray-700 max-w-3xl"></p>
                <div class="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
                  <div v-for="office in offices" :key="office.id">
                    <h3 class="text-lg font-medium text-artexa-red">{{ office.city }}</h3>
                    <p class="mt-2 text-base text-artexa-white">
                      <span v-for="line in office.address" :key="line" class="block">{{ line }}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>



        <!-- FAQ -->
        <section class="max-w-md mx-auto py-24 px-4 divide-y-2 divide-blue-gray-200 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:py-32 lg:px-8" aria-labelledby="faq-heading">
          <h2 class="text-3xl font-extrabold text-blue-gray-900" id="faq-heading">
            Frequently asked questions
          </h2>
          <div class="mt-6 pt-10">
            <dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:grid-rows-2 md:gap-x-8 md:gap-y-12">
              <div v-for="faq in faqs" :key="faq.id">
                <dt class="text-lg font-medium text-blue-gray-900">
                  {{ faq.question }}
                </dt>
                <dd class="mt-2 text-base text-blue-gray-500">
                  {{ faq.answer }}
                </dd>
              </div>
            </dl>
          </div>
        </section>
      </div>



      <!-- Newsletter Section -->
      <div class="max-w-full bg-artexa-teal-400">
      <section class="max-w-md mx-auto py-4 px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:py-6 lg:px-8 lg:flex lg:items-center text-artexa-white" aria-labelledby="newsletter-heading">
        <div class="lg:w-0 lg:flex-1">
          <h2 class="text-3xl font-extrabold sm:text-4xl uppercase" id="newsletter-heading">
            Newsletter
          </h2>
          <p class="max-w-3xl text-lg text-blue-gray-500">
            Sign up here to get the latest news, updates and special offers.
          </p>
        </div>
        <div class="mt-8 lg:mt-0 lg:ml-8">
          <form class="sm:flex">
            <label for="email-address" class="sr-only">Email address</label>
            <input id="email-address" name="email-address" type="email" autocomplete="email" required="" class="w-full px-5 py-3 border border-blue-gray-300 shadow-sm placeholder-artexa-teal-400 text-artexa-teal-400 focus:outline-none sm:max-w-xs rounded-md" placeholder="Enter your email" />
            <div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
              <button type="submit" class="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-artexa-white bg-artexa-red focus:outline-none">
                Subscribe
              </button>
            </div>
          </form>
          <p class="mt-3 text-sm text-blue-gray-500">
            We care about the protection of your data. Read our
            {{ ' ' }}
            <a href="#" class="font-medium underline">
              Privacy Policy.
            </a>
          </p>
        </div>
      </section>
      </div>
    </main>
  </div>

</template>

<script>
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import { MenuIcon, NewspaperIcon, PhoneIcon, SupportIcon, XIcon,  MailIcon, } from '@heroicons/vue/outline'
import gsap from 'gsap'

const offices = [
  { id: 1, city: 'Luxembourg', address: ['34 Rue principale', 'L8814 Bigonville'] },
]

const navigation = [
  { name: 'Changelog', href: '#' },
  { name: 'About', href: '#' },
  { name: 'Partners', href: '#' },
  { name: 'News', href: '#' },
]
const supportLinks = [
  {
    name: 'Product advice',
    href: '#',
    description:
        'Evaluating our products and need advice before you buy?',
    icon: NewspaperIcon,
  },
  {
    name: 'Sales',
    href: '#',
    description:
      'We\'ll help you find the right products and pricing for your business.',
    icon: PhoneIcon,
  },
  {
    name: 'Technical Support',
    href: '#',
    description:
        'Already using our products and experiencing technical issues?',
    icon: SupportIcon,
  },
]
const faqs = [
  {
    id: 1,
    question: "What's the best thing about Switzerland?",
    answer:
        "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    id: 2,
    question: 'Why do you never see elephants hiding in trees?',
    answer:
        "Because they're so good at it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    id: 3,
    question: 'How do you make holy water?',
    answer:
        'You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.',
  },
  {
    id: 4,
    question: "Why can't you hear a pterodactyl go to the bathroom?",
    answer:
        'Because the pee is silent. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.',
  },
  {
    id: 5,
    question: 'What do you call someone with no body and no nose?',
    answer: 'Nobody knows. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.',
  },
  {
    id: 6,
    question: 'Why did the invisible man turn down the job offer?',
    answer:
        "He couldn't see himself doing it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
]


export default {
  components: {
    Popover,
    PopoverButton,
    PopoverPanel,
    MenuIcon,
    XIcon,
    MailIcon,
    PhoneIcon
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
      navigation,
      supportLinks,
      faqs,
      offices,
      beforeEnter,
      enter,
      slide,
      beforeSlide,
    }
  },
}
</script>
