
<template>
  <TransitionRoot as="template" :show="mobileMenuOpen" id="header">
    <Dialog as="div" class="fixed inset-0 flex z-40 lg:hidden" @close="mobileMenuOpen = false">
      <TransitionChild as="template" enter="transition-opacity ease-linear duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="transition-opacity ease-linear duration-300" leave-from="opacity-100" leave-to="opacity-0">
        <DialogOverlay class="fixed inset-0 bg-black bg-opacity-25" />
      </TransitionChild>

      <TransitionChild as="template" enter="transition ease-in-out duration-300 transform" enter-from="-translate-x-full" enter-to="translate-x-0" leave="transition ease-in-out duration-300 transform" leave-from="translate-x-0" leave-to="-translate-x-full">
        <div class="relative max-w-xs w-full bg-gray-600 bg-opacity-90 shadow-xl pb-12 pt-24 flex flex-col overflow-y-auto">
          <div class="px-4 pt-5 pb-2 flex">
            <button type="button" class="-m-2 p-2 rounded-md inline-flex items-center justify-center text-gray-400" @click="mobileMenuOpen = false">
              <span class="sr-only">Close menu</span>
              <XIcon class="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <!-- Links -->
          <TabGroup as="div" class="mt-2">
            <div class="border-b border-gray-200">
              <TabList class="-mb-px flex px-4 space-x-8">
                <Tab as="template" v-for="category in navigationmobileCompany.categories" :key="category.name" v-slot="{ selected }">
                  <button :class="[selected ? 'text-teal-600 border-teal-600' : 'text-artexa-white border-transparent', 'flex-1 whitespace-nowrap py-4 px-1 border-b-2 text-base font-medium']">
                    {{ category.name }}
                  </button>
                </Tab>
                <Tab as="template" v-for="category in navigationmobilePortfolio.categories" :key="category.name" v-slot="{ selected }">
                  <button :class="[selected ? 'text-teal-600 border-teal-600' : 'text-artexa-white border-transparent', 'flex-1 whitespace-nowrap py-4 px-1 border-b-2 text-base font-medium']">
                    {{ category.name }}
                  </button>
                </Tab>
              </TabList>
            </div>
            <TabPanels as="template">
              <TabPanel v-for="category in navigationmobileCompany.categories" :key="category.name" class="px-4 py-6 space-y-12">
                <div class="grid grid-cols-2 gap-x-4 gap-y-10">
                  <div v-for="item in category.featured" :key="item.name" class="group relative">
                    <div class="aspect-w-1 aspect-h-1  rounded-md bg-gray-100 overflow-hidden group-hover:opacity-75">
                      <img :src="item.imageSrc" :alt="item.imageAlt" class="object-center object-cover" />
                    </div>
                    <router-link :to="item.href" class="mt-6 block text-sm font-medium text-artexa-white" @click="mobileMenuOpen = false">
                      <span class="absolute z-10 inset-0" aria-hidden="true" />
                      {{ item.name }}
                    </router-link>
                    <p aria-hidden="true" class="mt-1 text-sm text-gray-500">{{ item.role }}</p>
                  </div>
                </div>
              </TabPanel>

              <TabPanel v-for="category in navigationmobilePortfolio.categories" :key="category.name" class="px-4 py-6 space-y-12">
                <div class="grid grid-cols-2 gap-x-4 gap-y-10">
                  <div v-for="item in category.featured" :key="item.name" class="group relative">
                    <div class="aspect-w-1 aspect-h-1  rounded-md bg-gray-100 overflow-hidden group-hover:opacity-75">
                      <img :src="item.imageSrc" :alt="item.imageAlt" class="object-center object-cover" />
                    </div>
                    <a :href="item.href" target="_blank" class="mt-6 block text-sm font-medium text-artexa-white" @click="mobileMenuOpen = false">
                      <span class="absolute z-10 inset-0" aria-hidden="true" />
                      {{ item.name }}
                    </a>
                    <p aria-hidden="true" class="mt-1 text-sm text-gray-500">{{ item.role }}</p>
                  </div>
                </div>
              </TabPanel>
            </TabPanels>
          </TabGroup>




          <div class="border-t border-gray-200 py-6 px-4 space-y-6">
            <!-- languages selector -->
            <form>
              <div class="inline-block">
                <label class="sr-only">Languages</label>
                <div class="-ml-2 group relative border-transparent rounded-md focus-within:ring-2 focus-within:ring-white">
                </div>
              </div>
            </form>
          </div>
        </div>
      </TransitionChild>
    </Dialog>
  </TransitionRoot>

  <!-- Hero section -->
  <div class="fixed z-50 w-full bg-gray-900">
    <!-- Decorative image and overlay -->
    <div aria-hidden="true" class="absolute inset-0 overflow-hidden">
      <img src="https://tailwindui.com/img/ecommerce-images/home-page-01-hero-full-width.jpg" alt="" class="w-full h-full object-center object-cover" />
    </div>
    <div aria-hidden="true" class="absolute inset-0 bg-gray-900 opacity-50" />

    <!-- Navigation -->
    <header class="relative z-10">
      <nav aria-label="Top">
        <!-- Top navigation -->


        <!-- Secondary navigation -->
        <div class="backdrop-blur-md backdrop-filter bg-opacity-10 bg-artexa-white">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div>
              <div class="h-16 flex items-center justify-between">
                <!-- Logo (lg+) -->
                <div class="hidden w-3/12 lg:flex-1 lg:flex lg:items-center">
                  <router-link to="/">
                    <span class="sr-only">Workflow</span>
                    <img class="h-12 w-auto" src="img/artexa_logo_anime.svg" alt="artexa_logo" />
                  </router-link>
                </div>

                <div class="hidden h-full lg:flex w-11/12 justify-center">
                  <!-- Flyout menus -->
                  <PopoverGroup class="px-4 bottom-0 inset-x-0">
                    <div class="h-full flex justify-center space-x-8">
                      <a v-for="page in navigation.pages" :key="page.name" :href="page.href" class="flex items-center text-sm font-medium uppercase text-artexa-white hover:text-artexa-teal-400">{{ page.name }}</a>

                      <Popover v-for="category in navigation.categories" :key="category.name" class="flex" v-slot="{ open }">
                        <div class="relative flex">
                          <PopoverButton class="hover:text-artexa-teal-400 uppercase relative z-10 flex items-center justify-center transition-colors ease-out duration-200 text-sm font-medium text-artexa-white outline-none">
                            {{ category.name }}
                            <span :class="[open ? 'bg-artexa-white' : '', 'absolute -bottom-px inset-x-0 h-0.5 transition ease-out duration-200']" aria-hidden="true" />
                          </PopoverButton>
                        </div>

                        <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0" enter-to-class="opacity-100" leave-active-class="transition ease-in duration-150" leave-from-class="opacity-100" leave-to-class="opacity-0">
                          <PopoverPanel class="absolute top-full inset-x-0 text-sm text-gray-500">
                            <!-- Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow -->
                            <div class="absolute inset-0 top-1/2 bg-artexa-white shadow" aria-hidden="true" />

                            <div class="relative bg-artexa-white">
                              <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                <div class="flex justify-around py-10">
                                  <div v-for="item in category.featured" :key="item.name" class="group relative">
                                    <div class="h-40 w-40 rounded-md bg-gray-100 overflow-hidden group-hover:opacity-75">
                                      <img :src="item.imageSrc" :alt="item.imageAlt" class="object-center object-cover" />
                                    </div>
                                    <a :href="item.href" class="mt-4 block text-center font-medium text-gray-900">
                                      <span class="absolute z-10 inset-0" aria-hidden="true" />
                                      {{ item.name }}
                                    </a>
                                    <p aria-hidden="true" class="mt-1">{{ item.role }}</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </PopoverPanel>
                        </transition>
                      </Popover>

                    </div>
                  </PopoverGroup>
                </div>

                <!-- Mobile menu (lg-) -->
                <div class="flex-1 flex items-center lg:hidden">
                  <button type="button" class="-ml-2 p-2 text-artexa-white" @click="mobileMenuOpen = true">
                    <span class="sr-only">Open menu</span>
                    <MenuIcon class="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                <!-- Logo (lg-) -->
                <router-link to="/" class="lg:hidden">
                  <span class="sr-only">Artexa</span>
                  <img src="img/artexa_logo_anime.svg" alt="artexa_logo" class="h-12 w-auto" />
                </router-link>

                <div class="flex-1 flex items-center justify-end">

                  <div class="flex items-center lg:ml-8">
                    <!-- Mail -->
                    <router-link to="/contact" class="p-2 text-artexa-white lg:hidden">
                      <span class="sr-only">Contact</span>
                      <MailIcon class="w-6 h-6" aria-hidden="true" />
                    </router-link>
                  </div>
                </div>
                <div class="hidden w-3/12 lg:flex-1 lg:flex lg:items-center lg:justify-end">
                  <router-link to="/contact">
                    <MailIcon class="h-5 w-5 text-artexa-white hover:text-artexa-teal-400"/>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-gray-900">
          <div class="max-w-7xl mx-auto h-10 px-4 flex items-center justify-between sm:px-6 lg:px-8">

            <form>
              <div>
                <label for="desktop-currency" class="sr-only">Languages</label>
                <div class="-ml-2 group relative bg-gray-900 border-transparent rounded-md focus-within:ring-2 focus-within:ring-white">
                  <select v-model="$i18n.locale" id="desktop-currency" name="currency" class="bg-none bg-gray-900 border-transparent rounded-md py-0.5 pl-2 pr-5 flex items-center text-sm font-medium text-white group-hover:text-gray-100 focus:outline-none focus:ring-0 focus:border-transparent">
                    <option value="fr">FR</option>
                    <option value="en">EN</option>
                    <option value="it">IT</option>
                  </select>
                </div>
              </div>
            </form>

          </div>
        </div>
      </nav>
    </header>
  </div>



<router-view></router-view>



  <footer class="bg-gray-900">
    <div class="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">



      <div class="bg-gray-900">
        <div class="max-w-7xl mx-auto py-4 px-4 sm:py-4 sm:px-6 lg:px-8">
          <h2 class="text-3xl font-extrabold text-white mx-auto text-center">Here is a non-exhaustive list of our clients who trust us</h2>
          <div class="flow-root mt-8 lg:mt-10">
            <div class="-mt-4 -ml-8 flex flex-wrap justify-between lg:-ml-4">


              <div class="mt-4 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4">
                <img class="h-12 mr-2" src="img/logos/BELGA-MOBILITY.png" alt="belgamobility logo" />
                <p class="mt-2 text-xl font-base text-gray-400 text5 uppercase">Belgamobility</p>
              </div>

              <div class="mt-4 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4">
                <img class="h-12 mr-2" src="img/logos/fernelwhite.png" alt="claudio fava architetti logo" />
                <p class="mt-2 text-xl font-base text-gray-400 text5 uppercase">Fernelmove</p>
              </div>

              <div class="mt-4 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4">
                <img class="h-10 mr-2" src="img/logos/logo_sfondo.png" alt="StaticKit" />
                <p class="mt-2 text-xl font-base text-gray-400 text5 uppercase">Claudio Fava</p>
              </div>

              <div class="mt-4 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4">
                <img class="h-12 mr-2" src="img/logos/pizza-vino-white.png" alt="Transistor" />
                <p class="mt-2 text-xl font-base text-gray-400 text5 uppercase">Pizza Vino</p>
              </div>

            </div>
          </div>
        </div>
      </div>



      <nav class="-mx-5 -my-2 flex flex-wrap justify-center mt-4" aria-label="Footer">
        <div v-for="item in footernavigation.main" :key="item.name" class="px-5 py-2">
          <a :href="item.href" class="text-base text-gray-500 hover:text-artexa-teal-400">
            {{ item.name }}
          </a>
        </div>
      </nav>
      <div class="mt-8 flex justify-center space-x-6">
        <a v-for="item in footernavigation.social" :key="item.name" :href="item.href" class="text-gray-200 hover:text-artexa-teal-400">
          <span class="sr-only">{{ item.name }}</span>
          <component :is="item.icon" class="h-6 w-6" aria-hidden="true" />
        </a>
      </div>
      <p class="mt-8 text-center text-base text-gray-400">
        &copy; {{new Date().getFullYear()}} Artexa agency. All rights reserved.
      </p>
    </div>

    <vue-cookie-comply
        :preferences="[
            {
              title: 'Required Information / Information requise',
              description:
                'Personal information collected such as names, telephone numbers and places are mandatory to allow the application to function properly and will in no way be disclosed to third parties. / Les informations personnelles collectées telles que noms, numéros de téléphone et lieux sont obligatoires pour permettre le bon fonctionnement de l\'application et ne seront en aucun cas divulguées à des tiers.',
              items: [{ label: 'Active', value: 'I understand / je comprend ', isRequired: true }],
            },
            {
              title: 'GoogleAnalytics',
              description:
                  'We ask for permission to collect statistical information relating to our site in a completely anonymous form to understand on average how many users use our application, the type of browser used or the type of device used (smartphone rather than PC) in order to improve our service. / Nous demandons l\'autorisation de collecter des informations statistiques relatives à notre site sous une forme totalement anonyme pour comprendre en moyenne combien d\'utilisateurs utilisent notre application, le type de navigateur utilisé ou le type d\'appareil utilisé (smartphone plutôt que PC) afin d\'améliorer notre service. ',
              items: [
                { label: 'GoogleAnalytics', value: 'Allow / Permettre ?' },
              ],
            },
          ]"
    >
      <template v-slot:header class="bg-white">
        <header>Cher visiteur / Dear visitor </header>

        <footer class="mt-1">
          <p class="text-xs text-gray-500">En cliquant "Accept All" vous acceptez les <a href="/Terms" class="text-gold">conditions d'utilisation</a> ainsi que le <a href="/Privacy" class="text-gold">traitement des données personnelles</a> afin de pouvoir fournir le service.</p>
          <p class="text-xs text-gray-500">By clicking "Accept All" you accept the <a href="/Terms" class="text-gold">Terms of use</a> as well as the <a href="/Privacy" class="text-gold">processing of personal data</a> in order to be able to provide the service.</p>
        </footer>
      </template>

      <template v-slot:modal-body="{ preference }">
        <div class="mt-6">
          <h4 class="text-bold text-sm">{{ preference.title }}</h4>
          <p class="mt-2 text-xs text-gray-500">{{ preference.description }}</p>

          <div v-for="(item, index) in preference.items" v-bind:key="index"  class="cookie-comply__modal-switches my-3">
            <h3 class="text-sm">{{item.value}}</h3>
            <label class="cookie-comply-switch" title="ok">
              <input id="sentry" type="checkbox" value="ok">
              <span class="cookie-comply-slider cookie-comply-round"></span>
            </label>
          </div>
        </div>
      </template>

    </vue-cookie-comply>
  </footer>
</template>

<script>

import { ref } from 'vue'
import {
  Dialog,
  DialogOverlay,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue'
import { MenuIcon, QuestionMarkCircleIcon, SearchIcon, ShoppingBagIcon, XIcon } from '@heroicons/vue/outline'
import { defineComponent, h } from 'vue'
import { MailIcon } from '@heroicons/vue/solid'
import 'vue-cookie-comply/dist/style.css'


const languages =
    [
      {
        id: 1,
        name: "EN",
        value: "en"
      },
      {
        id: 2,
        name: "FR",
        value: "fr"
      },
     ]


const navigationmobilePortfolio = {
  categories: [
    {
      name: 'Portfolio',
      featured: [
        {
          name: 'Belgamobility',
          href: 'https://www.belgamobility.com/',
          imageSrc: 'img/logos/BELGA-MOBILITY.png',
          imageAlt: 'Belgamobility project.',
        },
        {
          name: 'Fernelmove',
          href: 'http://fernelmove.be',
          imageSrc: 'img/logos/FernelLogoFinal.svg',
          imageAlt: 'social application developped for the municipality of Fernelmont.',
        },
        {
          name: 'Fava Claudio Architect',
          href: 'https://www.favaclaudio.com',
          imageSrc: 'img/logos/logo-small.png',
          imageAlt: 'Fava Claudio architect website.',
        },
        {
          name: 'Pizza Vino',
          href: 'https://pizzavino.be',
          imageSrc: 'img/logos/pizza-vino-logo.png',
          imageAlt: 'Pizza vino web site.',
        },
      ],
    },
  ],
}



const navigationmobileCompany = {
  categories: [
    {
      name: 'Company',
      featured: [
        {
          name: 'About',
          role: '',
          href: '/about',
          imageSrc: 'img/artexa_round_anime_logo.svg',
          imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
        },
        {
          name: 'Services',
          role: '',
          href: '/workflow',
          imageSrc: 'img/services_logo.png',
          imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
        },
        {
          name: 'Team',
          role: '',
          href: '/team',
          imageSrc: 'img/team_logo.png',
          imageAlt: 'Model wearing minimalist watch with black wristband and white watch face.',
        },
      ],
    },
  ],
}

 const navigation = {
   categories: [
   {
      name: 'Portfolio',
      featured: [
        {
          name: 'Belgamobility',
          href: 'https://www.belgamobility.com/',
          imageSrc: 'img/logos/BELGA-MOBILITY.png',
          imageAlt: 'Hats and sweaters on wood shelves next to various colors of t-shirts on hangers.',
        },
        {
          name: 'Fernelmove',
          href: 'http://fernelmove.be',
          imageSrc: 'img/logos/FernelLogoFinal.svg',
          imageAlt: 'social application developped for the municipality of Fernelmont.',
        },
        {
          name: 'Fava Claudio Architect',
          href: 'https://www.favaclaudio.com',
          imageSrc: 'img/logos/logo-small.png',
          imageAlt:
              'Fava Claudio architect website.',
        },
        {
          name: 'Pizza Vino',
          href: 'https://pizzavino.be',
          imageSrc: 'img/logos/pizza-vino-logo.png',
          imageAlt: 'pizza vino web site.',
        },
      ],
    },
  ],
  pages: [
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/workflow' },
    { name: 'Team', href: '/team' },
  ],
}

const footernavigation = {
  main: [
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/workflow' },
    { name: 'Team', href: '/team' },
    { name: 'Contact', href: '/contact' },
    { name: 'Terms', href: '/terms' },
    { name: 'Privacy', href: '/privacy' },
  ],
  social: [
    {
      name: 'Facebook',
      href: '#',
      icon: defineComponent({
        render: () =>
            h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
              h('path', {
                'fill-rule': 'evenodd',
                d:
                    'M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z',
                'clip-rule': 'evenodd',
              }),
            ]),
      }),
    },
    {
      name: 'Instagram',
      href: '#',
      icon: defineComponent({
        render: () =>
            h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
              h('path', {
                'fill-rule': 'evenodd',
                d:
                    'M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z',
                'clip-rule': 'evenodd',
              }),
            ]),
      }),
    },
    {
      name: 'Twitter',
      href: '#',
      icon: defineComponent({
        render: () =>
            h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
              h('path', {
                d:
                    'M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84',
              }),
            ]),
      }),
    },
  ],
}


export default {


  data(){
    return {
      user:'',
      wa:false,
      preference: [
        {
          title: 'Performance',
          description:
              'Bla bla serviços que podemos oferecer erviços que podemos oferecer erviços que podemos oferecer erviços que podemos oferecer serviços que podemos oferecer.',
          items: [{ label: 'Active', value: 'performance', isRequired: true }],
        },
        {
          title: 'Analytics',
          description:
              'Bla bla serviços que podemos oferecer erviços que podemos oferecer erviços que podemos oferecer erviços que podemos oferecer serviços que podemos oferecer.',
          items: [
            { label: 'GoogleAnalytics', value: 'ga' },
            { label: 'Sentry', value: 'sentry', isEnable: true },
            { label: 'Mapbox', value: 'mapbox' },
            { label: 'New Relic', value: 'newRelic', isEnable: true },
            { label: 'Dog Food', value: 'dogfood' },
          ],
        },
      ]
    }
  },
  /* eslint-disable */

  methods:{
    french(){
      $i18n.locale == 'en'
    },
    waz(){
      this.wa = true
    },
  },



  setup() {
    const mobileMenuOpen = ref(false)
    return {
      mobileMenuOpen,
      navigationmobilePortfolio,
      navigationmobileCompany,
      navigation,
      footernavigation,
      languages,
    }
  },

  components: {
    Dialog,
    DialogOverlay,
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
    Tab,
    TabGroup,
    TabList,
    TabPanel,
    TabPanels,
    TransitionChild,
    TransitionRoot,
    MenuIcon,
    QuestionMarkCircleIcon,
    SearchIcon,
    ShoppingBagIcon,
    XIcon,
    MailIcon,
  },
}
</script>

<style>


.cookie-comply{
  position: fixed !important;
  left: 0 !important;
  bottom: 0 !important;
}

.cookie-comply__back-arrow{
  display: none !important;
}

.cookie-comply__button-accept {
  background-color: black !important;
  color: var(--color-white);
  border: none;
}

a[type=button] {
  -webkit-appearance: none !important;
  -webkit-border-radius: 0 !important;
}

</style>
