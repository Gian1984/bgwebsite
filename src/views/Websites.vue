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

        <main class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
          <div class="sm:text-center lg:text-left">
            <img class="h-24 mb-6" src="img/artexa.png" alt="artexa logo"/>
            <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span class="block xl:inline">We create websites</span>
            </h1>
            <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">The upgrade of your business starts with your website.</p>
            <!-- <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div class="rounded-md shadow">
                <a href="#" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"> Get started </a>
              </div>
              <div class="mt-3 sm:mt-0 sm:ml-3">
                <a href="#" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"> Live demo </a>
              </div>
            </div> -->
          </div>
        </main>
      </div>
    </div>
    <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
      <img class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80" alt="" />
    </div>
  </div>




  <div class="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
    <div class="absolute inset-0">
      <div class="bg-white h-1/3 sm:h-2/3" />
    </div>
    <div class="relative max-w-7xl mx-auto">
      <div class="text-center">
        <h2 class="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">The guide to the creation of websites</h2>
        <p class="mt-3 max-w-4xl mx-auto text-xl text-gray-500 sm:mt-4">Depending on your objectives, we determine together which type of website is adapted to your current objectives and needs. You already have a website and want to redo it? Artexa also accompanies you in the redesign of your website.</p>
      </div>
      <div class="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
        <div v-for="post in posts" :key="post.title" class="flex flex-col shadow-lg overflow-hidden">
          <div class="flex-shrink-0">
            <img class="h-48 w-full object-contain object-center" :src="post.imageUrl" alt="" />
          </div>
          <div class="flex-1 bg-white p-6 flex flex-col justify-between">
            <div class="flex-1">
              <a :href="post.href" class="block mt-2">
                <p class="text-xl font-semibold text-gray-900">
                  {{ post.title }}
                </p>
                <p class="mt-3 text-base text-gray-500">
                  {{ post.description }}
                </p>
                <p class="px-3 py-1 border border-transparent text-base font-medium rounded-md text-white bg-artexa-teal-400 hover:bg-artexa-red md:text-lg md:px-10 text-center">
                    Know more
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Blog section -->
        <div class="relative bg-gray-50 py-8">
          <div class="max-w-7xl mx-auto relative">
            <div class="text-center mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl mb-8">
              <p class="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
                {{ $t('workBlogPosts.title') }}
              </p>
              <p class="mt-5 mx-auto max-w-prose text-xl text-gray-500">
                {{ $t('workBlogPosts.subtitle') }}
              </p>
            </div>
            <!-- TIMELINE -->
            <ol class="items-center sm:flex">
                <li v-for="step in steps" :key="step.id" class="relative mb-6 sm:mb-0">
                    <div class="flex items-center">
                        <div class="flex z-10 justify-center items-center w-32 h-32 shrink-0">
                            <img class="w-32 h-32 object-center object-contain" viewBox="0 0 20 20" :src="step.imageUrl">
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

</template>

<script>
import { Popover} from '@headlessui/vue'

const posts = [
  {
    title: 'Create a showcase website',
    href: '/showcasewebsite',
    description:
      'A showcase site is nothing more or less than your digital business card. It is mainly used to present an activity, products or services. It is perfect for any type of business as long as you don\'t make online sales.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    imageUrl:
      'img/websites.svg',
  },
  {
    title: 'Create an e-commerce',
    href: '/ecommerce',
    description:
      'An e-commerce can be used alone or in addition to a physical store. Its advantage is that it costs less than a store where you have to pay rent, insurance, electricity. Moreover, you do not have the constraint to go every day in your store, it is it which comes to you that you are at home or elsewhere.',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10',
    imageUrl:
      'img/e-commerce.svg',
  },
  {
    title: 'Create an intranet',
    href: '/intranet',
    description:
      'An intranet is a company\'s internal site that allows all employees to have a private user space and interact with the company. Like for example a page for employees to request their vacations.',
    date: 'Feb 12, 2020',
    datetime: '2020-02-12',
    imageUrl:
      'img/intranet.svg',
  },
]

const steps = [
  {
    title: 'Roadmap',
    subTitle: 'Step 1',
    description: 'To define the vision of a product or service, I take the time to listen to you and understand your needs and those of your customers. I write a document with the technical specifications, some mockups, a program and a budget estimate.',
    imageUrl: 'img/conversation.svg',
  },
  {
    title: 'Prototyping',
    subTitle: 'Step 2',
    description: 'There is no universal and precise formula, because each project can have different characteristics. At the beginning we have to define objectives and potential critical issues, after which we move on to the conception of the product and then to the creation of a prototype.',
    imageUrl: 'img/designer_life.svg',
  },
  {
    title: 'Development',
    subTitle: 'Step 3',
    description: 'Do you have the vision, feel the pull and all you need is software? We will work with you to develop this new functional and design product that your customers will love to use. And We\'ll help you get started.',
    imageUrl: 'img/programming.svg',
  },
]

export default {
  components: {
    Popover,
  },
  setup() {
    return {
      posts,
      steps,
    }
  },
}
</script>