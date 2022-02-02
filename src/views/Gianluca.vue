<template>
  <div class="bg-white">
    <!-- Header -->
    <div class="relative pb-32 bg-gray-800">
      <div class="absolute inset-0">
        <img class="w-full h-full object-cover" src="img/coding_glass.jpg" alt="coding" />
        <div class="absolute inset-0 bg-gray-800 mix-blend-multiply" aria-hidden="true" />
      </div>
      <div class="relative max-w-7xl mx-auto py-32 px-4 sm:py-36 sm:px-6 lg:px-8">
        <h1 class="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">Support</h1>
        <p class="mt-6 max-w-3xl text-xl text-gray-300">Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames. Dui, amet, nec sit pulvinar.</p>
      </div>
    </div>
  <main class="-mt-24 pb-8 relative z-10">
    <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <h1 class="sr-only">Profile</h1>
      <!-- Main 3 column grid -->
      <div class="grid grid-cols-1 gap-4 items-start lg:grid-cols-3 lg:gap-8">
        <!-- Left column -->
        <div class="grid grid-cols-1 gap-4 lg:col-span-2">
          <!-- Welcome panel -->
          <section aria-labelledby="profile-overview-title">
            <div class="rounded-lg bg-white overflow-hidden shadow">
              <h2 class="sr-only" id="profile-overview-title">Profile Overview</h2>
              <div class="bg-white p-6">
                <div class="sm:flex sm:items-center sm:justify-between">
                  <div class="sm:flex sm:space-x-5">
                    <div class="flex-shrink-0">
                      <img class="mx-auto h-20 w-20 rounded-full" :src="user.imageUrl" alt="" />
                    </div>
                    <div class="mt-4 text-center sm:mt-0 sm:pt-1 sm:text-left">
                      <p class="text-xl font-bold text-gray-900 sm:text-2xl">{{ user.name }}</p>
                      <p class="text-sm font-medium text-gray-600">{{ user.role }}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="border-t border-gray-200 bg-gray-50 grid grid-cols-1 divide-y divide-gray-200 sm:grid-cols-3 sm:divide-y-0 sm:divide-x">
                <div v-for="stat in stats" :key="stat.label" class="px-6 py-5 text-sm font-medium text-center">
                  <span class="text-gray-900">{{ stat.value }}</span>
                  {{ ' ' }}
                  <span class="text-gray-600">{{ stat.label }}</span>
                </div>
              </div>
            </div>
          </section>

          <!-- Actions panel -->
          <section aria-labelledby="quick-links-title">
            <div class="rounded-lg bg-gray-200 overflow-hidden shadow divide-y divide-gray-200 sm:divide-y-0 sm:grid sm:grid-cols-2 sm:gap-px">
              <h2 class="sr-only" id="quick-links-title">Quick links</h2>
              <div v-for="(action, actionIdx) in actions" :key="action.name" :class="[actionIdx === 0 ? 'rounded-tl-lg rounded-tr-lg sm:rounded-tr-none' : '', actionIdx === 1 ? 'sm:rounded-tr-lg' : '', actionIdx === actions.length - 2 ? 'sm:rounded-bl-lg' : '', actionIdx === actions.length - 1 ? 'rounded-bl-lg rounded-br-lg sm:rounded-bl-none' : '', 'relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-cyan-500']">
                <div>
                    <span :class="[action.iconBackground, action.iconForeground, 'rounded-lg inline-flex p-3 ring-4 ring-white']">
                      <component :is="action.icon" class="h-6 w-6" aria-hidden="true" />
                    </span>
                </div>
                <div class="mt-8">
                  <h3 class="text-lg font-medium">
                    <a :href="action.href" class="focus:outline-none">
                      <!-- Extend touch target to entire panel -->
                      <span class="absolute inset-0" aria-hidden="true" />
                      {{ action.name }}
                    </a>
                  </h3>
                  <p class="mt-2 text-sm text-gray-500">
                    Doloribus dolores nostrum quia qui natus officia quod et dolorem. Sit repellendus qui ut at blanditiis et quo et molestiae.
                  </p>
                </div>
                <span class="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400" aria-hidden="true">
                    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
                    </svg>
                  </span>
              </div>
            </div>
          </section>
        </div>

        <!-- Right column -->
        <div class="grid grid-cols-1 gap-4">
          <!-- Announcements -->
          <section aria-labelledby="announcements-title">
            <div class="rounded-lg bg-white overflow-hidden shadow">
              <div class="p-6">
                <h2 class="text-base font-medium text-gray-900 uppercase" id="announcements-title">About me</h2>
                <div class="flow-root mt-6">
                  <ul role="list" class="-my-5 divide-y divide-gray-200">
                    <li v-for="announcement in announcements" :key="announcement.id" class="py-5">
                      <div class="relative focus-within:ring-2 focus-within:ring-cyan-500">
                        <h3 class="text-sm font-semibold text-gray-800">
                          <p class="focus:outline-none">
                            <!-- Extend touch target to entire panel -->
                            <span class="absolute inset-0" aria-hidden="true" />
                            {{ announcement.title }}
                          </p>
                        </h3>
                        <ul role="list">
                          <li v-for="item in announcement.features" :key="item.id" class="py-1">
                            <p class="mt-1 text-sm text-gray-600">
                             -  {{ item  }}
                            </p>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </main>
  </div>
</template>

<script>

import {AcademicCapIcon, BadgeCheckIcon, BellIcon, CashIcon, ClockIcon, MenuIcon, ReceiptRefundIcon, UsersIcon, XIcon,
} from '@heroicons/vue/outline'
import { SearchIcon } from '@heroicons/vue/solid'


const user = {
  name: 'Gianluca Tiengo',
  email: 'chelseahagon@example.com',
  role: 'Programmer',
  imageUrl:
      'img/gian.jpg',
}

const stats = [
  { label: 'Vacation days left', value: 12 },
  { label: 'Sick days left', value: 4 },
  { label: 'Personal days left', value: 2 },
]


const actions = [
  {
    icon: ClockIcon,
    name: 'Request time off',
    href: '#',
    iconForeground: 'text-teal-700',
    iconBackground: 'bg-teal-50',
  },
  {
    icon: BadgeCheckIcon,
    name: 'Benefits',
    href: '#',
    iconForeground: 'text-purple-700',
    iconBackground: 'bg-purple-50',
  },
  {
    icon: UsersIcon,
    name: 'Schedule a one-on-one',
    href: '#',
    iconForeground: 'text-sky-700',
    iconBackground: 'bg-sky-50',
  },
  { icon: CashIcon, name: 'Payroll', href: '#', iconForeground: 'text-yellow-700', iconBackground: 'bg-yellow-50' },
  {
    icon: ReceiptRefundIcon,
    name: 'Submit an expense',
    href: '#',
    iconForeground: 'text-rose-700',
    iconBackground: 'bg-rose-50',
  },
  {
    icon: AcademicCapIcon,
    name: 'Training',
    href: '#',
    iconForeground: 'text-indigo-700',
    iconBackground: 'bg-indigo-50',
  },
]

const announcements = [
  {
    id: 1,
    title: 'Professional Skills',
    preview: 'Cum qui rem deleniti. Suscipit in dolor veritatis sequi aut. Vero ut earum quis deleniti. Ut a sunt eum cum ut repudiandae possimus. Nihil ex tempora neque cum consectetur dolores.',
    features:{
      one:"Web content development",
      two:"Marketing",
      three:"Social media strategy",
      four:"Project management",
      five:"Market research",
    }
  },
  {
    id: 2,
    title: 'Personal Skills',
    features:{
      one:"Reliable and professional",
      two:"Organized",
      three:"Time management",
      four:"Team player",
      five:"Fast learner",
      six:"Motivated",
    }
  },
  {
    id: 3,
    title: 'Contact',
    features:{
      one:"+32 492 64 97 96",
      two:"gl.tiengo@gmail.com",
    }



  },
]

export default {

  components: {
    BellIcon,
    MenuIcon,
    SearchIcon,
    XIcon,
  },

  setup() {
    return {
      user,
      stats,
      actions,
      announcements,
    }
  },

}

</script>
