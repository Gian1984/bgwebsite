<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="bg-white">
    <main class="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-xl mx-auto py-32 sm:py-32">
        <div class="text-center">
          <p class="text-sm font-semibold text-indigo-600 uppercase tracking-wide">
            <img class="h-16 mx-auto mt-4" src="img/artexa.png" alt="artexa logo"/>
          </p>
          <h1 class="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">Thank you for subscribing to our newsletter</h1>
          <p class="mt-2 text-lg text-gray-500">We strive not to be too invasive with our customers but you can still unsubscribe at any time by sending an email to our address newsletter@artexa.agency.</p>
        </div>
        <div class="mt-12">
          <h2 class="text-sm font-semibold text-gray-500 tracking-wide uppercase">Popular pages</h2>
          <ul role="list" class="mt-4 border-t border-b border-gray-200 divide-y divide-gray-200">
            <li v-for="(link, linkIdx) in links" :key="linkIdx" class="relative py-6 flex items-start space-x-4">
              <div class="flex-shrink-0">
                <span class="flex items-center justify-center h-12 w-12 rounded-lg bg-artexa-teal-300">
                  <component :is="link.icon" class="h-6 w-6 text-artexa-red" aria-hidden="true" />
                </span>
              </div>
              <div class="min-w-0 flex-1">
                <h3 class="text-base font-medium text-gray-900">
                  <span class="rounded-sm focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                    <router-link :to="link.href" class="focus:outline-none">
                      <span class="absolute inset-0" aria-hidden="true" />
                      {{ link.title }}
                    </router-link>
                  </span>
                </h3>
                <p class="text-base text-gray-500">{{ link.description }}</p>
              </div>
              <div class="flex-shrink-0 self-center">
                <ChevronRightIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
              </div>
            </li>
          </ul>
          <div class="mt-8">
            <router-link to="/" class="text-base font-medium text-artexa-teal-400 hover:text-artexa-red">Or go back home<span aria-hidden="true"> &rarr;</span></router-link>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>

import { ChevronRightIcon } from '@heroicons/vue/solid'
import { BookmarkAltIcon, BookOpenIcon, RssIcon, ViewListIcon } from '@heroicons/vue/outline'

const links = [
  { title: 'About', description: 'More about us', href:'/about', icon: BookOpenIcon },
  { title: 'Services', description: 'Know more about our services', href:'/Services', icon: ViewListIcon },
  { title: 'Team', description: 'Know more abour our team',href:'/Team', icon: BookmarkAltIcon },
  { title: 'Contact', description: 'Needed more information?', href:'/Contact', icon: RssIcon },
]


export default {
  components: {
    ChevronRightIcon,
  },
  setup() {
    return {
      links,
    }
  },
}
</script>
