<template>
    <!-- Hero section -->
    <header class="relative overflow-hidden h-screen">
      <div class="w-screen pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
        <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static">
          <main class="mt-10 mx-auto max-w-7xl pt-12 md:pt-16 lg:pt-20 xl:pt-28">
            <div class="sm:text-center lg:text-left">
              <div class="sm:max-w-lg">
                <img class="h-24 mb-6 sm:max-w-xl mx-auto lg:mx-0" src="img/artexa.png" alt="artexa logo"/>
                <h1 class="sm:text-center lg:text-left text-4xl font font-extrabold tracking-tight text-gray-900 sm:text-6xl">Photos & videos</h1>
                <p class="sm:text-center lg:text-left mt-4 text-xl text-gray-500">Enhance the attractiveness of your website.</p>
              </div>
            </div>
          </main>
          <div>
            <div class="mt-10">
              <!-- Decorative image grid -->
              <div aria-hidden="true" class="pointer-events-none lg:absolute lg:inset-y-0 lg:max-w-7xl lg:mx-auto lg:w-full">
                <div class="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div class="flex items-center space-x-6 lg:space-x-8">
                    <div class="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div class="w-44 h-64 overflow-hidden sm:opacity-0 lg:opacity-100">
                        <img src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg" alt="photo sample" class="w-full h-full object-center object-cover" />
                      </div>
                      <div class="w-44 h-64 overflow-hidden">
                        <img src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg" alt="photo sample" class="w-full h-full object-center object-cover" />
                      </div>
                    </div>
                    <div class="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div class="w-44 h-64 overflow-hidden">
                        <img src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg" alt="photo sample" class="w-full h-full object-center object-cover" />
                      </div>
                      <div class="w-44 h-64 overflow-hidden">
                        <img src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg" alt="photo sample" class="w-full h-full object-center object-cover" />
                      </div>
                      <div class="w-44 h-64 overflow-hidden">
                        <img src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg" alt="photo sample" class="w-full h-full object-center object-cover" />
                      </div>
                    </div>
                    <div class="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div class="w-44 h-64 overflow-hidden">
                        <img src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg" alt="photo sample" class="w-full h-full object-center object-cover" />
                      </div>
                      <div class="w-44 h-64 overflow-hidden">
                        <img src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg" alt="photo sample" class="w-full h-full object-center object-cover" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <a href="#" class="inline-block text-center bg-artexa-teal-400 border border-transparent py-3 px-8 font-medium text-white hover:bg-artexa-red">Contact us</a>
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- FORFAIT -->

    <div class="relative bg-white">
      <!-- Background image and overlap MOBILE -->
      <div aria-hidden="true" class="hidden absolute inset-0 sm:flex sm:flex-col">
        <div class="flex-1 relative w-full bg-gray-800">
          <div class="absolute inset-0 overflow-hidden">
            <img src="../../public/img/photographer1.jpg" alt="photographer in action" class="w-full h-full object-center object-cover" />
          </div>
          <div class="absolute inset-0 bg-gray-900 opacity-50" />
        </div>
        <div class="w-full bg-white h-32 md:h-40 lg:h-48" />
      </div>

      <div class="relative max-w-3xl mx-auto pb-96 px-4 text-center sm:pb-0 sm:px-6 lg:px-8">
        <!-- Background image and overlap DESKTOP -->
        <div aria-hidden="true" class="absolute inset-0 flex flex-col sm:hidden">
          <div class="flex-1 relative w-full bg-gray-800">
            <div class="absolute inset-0 overflow-hidden">
              <img src="../../public/img/photographer1.jpg" alt="photographer in action" class="w-full h-full object-center object-cover" />
            </div>
            <div class="absolute inset-0 bg-gray-900 opacity-50" />
          </div>
          <div class="w-full bg-white h-48" />
        </div>
        <div class="relative py-32">
          <h1 class="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">Boost your business</h1>
          <p class="mt-3 text-xl text-white">Attract new customers, increase your brand visibility and create relevant content for your business. Discover all the tools you need to easily create promotional videos for any type of business, from product and service presentations to restaurant, real estate, online store and more.</p>
        </div>
      </div>

      <section aria-labelledby="collection-heading" class="-mt-96 relative sm:mt-0">
        <h2 id="collection-heading" class="sr-only">Collections</h2>
        <div class="max-w-md mx-auto grid grid-cols-1 gap-y-6 px-4 sm:max-w-7xl sm:px-6 sm:grid-cols-3 sm:gap-y-0 sm:gap-x-6 lg:px-8 lg:gap-x-8">
          <div v-for="collection in collections" :key="collection.name" class="group relative h-96 bg-artexa-teal-300 shadow-xl sm:h-auto sm:aspect-w-4 sm:aspect-h-5">
            <div>
              <div aria-hidden="true" class="absolute inset-0 overflow-hidden">
                <div class="absolute inset-0 overflow-hidden group-hover:opacity-75">
                    <div style="bottom: 40%; left: 33%;" class="absolute flex justify-center items-end opacity-0 p-4 group-hover:opacity-100" aria-hidden="true">
                      <div class="w-full bg-artexa-teal-300 backdrop-filter backdrop-blur py-2 px-4 text-sm font-medium text-gray-900 text-center">Contact Us</div>
                    </div>
                    <img :src="collection.imageSrc" :alt="collection.imageAlt" class="w-full h-full object-center object-cover" />
                </div>
                <div class="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50" />
              </div>
              <div class="absolute inset-0 rounded-lg p-6 flex items-end">
                <div>
                  <!-- <p aria-hidden="true" class="text-sm text-white">{{ collection.price }}</p> -->
                  <h3 class="mt-1 font-semibold text-white">
                    <a :href="collection.href">
                      <span class="absolute inset-0" />
                      {{ collection.name }}
                    </a>
                  </h3>
                  <p aria-hidden="true" class="text-sm text-white">{{ collection.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>



        <!-- BANNER -->
        <div class="bg-white pt-12 lg:pt-24">
            <div class="relative max-w-7xl mx-auto  sm:px-2  lg:px-4">
                <div class="relative py-24 px-8 bg-transparent overflow-hidden lg:px-16 lg:grid lg:grid-cols-2 lg:gap-x-8">
                    <!-- <div class="absolute inset-0 opacity-50 filter saturate-0 mix-blend-multiply">
                        <img src="https://images.unsplash.com/photo-1601381718415-a05fb0a261f3?ixid=MXwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8ODl8fHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1216&q=80" alt="" class="w-full h-full object-cover" />
                    </div> -->
                    <div class="relative flex items-center lg:col-span-1">
                        <!-- <img class="h-12 w-auto" src="img/artexa.png" alt="artexa logo" /> -->
                        <blockquote class="mt-6 text-black">
                            <p class="text-xl font-medium sm:text-2xl">75% of end users are more likely to buy if they have seen an explanatory video just before.</p>
                            <footer class="mt-6">
                                <p class="flex flex-col font-medium">
                                    <span>Ahmad Hendi</span>
                                    <span>Photographer</span>
                                </p>
                            </footer>
                        </blockquote>
                    </div>
                    <div class="mt-6 lg:mt-0 lg:col-span-1">
                      <!-- CAROUSSEL VIDEO -->
                        <div id="video">
                          <div class="relative slide">
                            <!-- <div class="carousel-indicators absolute bottom-0 flex h-24 w-full justify-center items-center">
                              <ol class="z-50 flex w-4/12 justify-center">
                                <li v-for="(img, i) in images" :key="i" class="md:w-4 md:h-4 bg-gray-300 rounded-full cursor-pointer mx-2"></li>
                              </ol>
                            </div> -->
                            <div class="carousel-inner relative overflow-hidden w-full">
                              <div v-for="(img, i) in images" :id="`slide-${i}`" :key="i" :class="`${active === i ? 'active' : 'left-full'}`" class="carousel-item inset-0 relative w-full transform transition-all duration-500 ease-in-out">
                                <video class="block w-full" autoplay loop muted>
                                  <source :src="img" type="video/mp4" />
                                </video>
                              </div>
                            </div>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- GALLERY -->
        <section class="bg-white overflow-hidden">
            <div class="max-w-7xl mx-auto pb-12 sm:px-2 sm:pb-24 lg:px-4">
                <div class="lg:flex block flex-wrap -m-1 md:-m-2">
                    <div class="max-w-7xl lg:flex block flex-wrap w-full lg:w-1/2">
                        <div class="lg:w-1/2 w-full p-1 md:p-2">
                            <img alt="gallery" class="block object-cover object-center w-full h-full hover:opacity-50 transition duration-300 ease-in-out bg-artexa-teal-400" src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp">
                        </div>
                        <div class="lg:w-1/2 w-full p-1 md:p-2">
                            <img alt="gallery" class="block object-cover object-center w-full h-full hover:opacity-50 transition duration-300 ease-in-out bg-artexa-teal-400" src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp">
                        </div>
                        <div class="w-full p-1 md:p-2">
                            <img alt="gallery" class="block object-cover object-center w-full h-full hover:opacity-50 transition duration-300 ease-in-out bg-artexa-teal-400" src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp">
                        </div>
                    </div>
                    <div class="lg:flex block flex-wrap w-full lg:w-1/2">
                        <div class="w-full p-1 md:p-2">
                            <img alt="gallery" class="block object-cover object-center w-full h-full hover:opacity-50 transition duration-300 ease-in-out bg-artexa-teal-400" src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp">
                        </div>
                        <div class="lg:w-1/2 w-full p-1 md:p-2">
                            <img alt="gallery" class="block object-cover object-center w-full h-full hover:opacity-50 transition duration-300 ease-in-out bg-artexa-teal-400" src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp">
                        </div>
                        <div class="lg:w-1/2 w-full p-1 md:p-2">
                            <img alt="gallery" class="block object-cover object-center w-full h-full hover:opacity-50 transition duration-300 ease-in-out bg-artexa-teal-400" src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(77).webp">
                        </div>
                    </div>
                </div>
            </div>
        </section>

</template>
<script>
  const collections = [
    {
      // price: "From 1200€",
      name: "Photos",
      description: "Treat yourself to a set of personalized professional photos: portraits of employees, construction sites, specific products... A photographer will come to your place and make custom shots.",
      href: '/contact',
      imageSrc: 'img/photo1.jpg',
      imageAlt: 'Woman wearing an off-white cotton t-shirt.',
    },
    {
      // price: "From 1200€",
      name: "Videos",
      description: "The corporate video is a custom-made professional video of 1 to 2 minutes, made on your offices or at your place of work. The video is integrated on your website and referenced on YouTube.",
      href: '/contact',
      imageSrc: 'img/video1.jpg',
      imageAlt: 'Man wearing a charcoal gray cotton t-shirt.',
    },
    {
      // price: "From 1200€",
      name: 'Photos + Videos',
      description: "A professional photographer comes to your home and takes and does a photo shoot as well as a 30 second video and a 30 second video that will be used to illustrate your website.",
      href: '/contact',
      imageSrc: 'img/photo2.jpg',
      imageAlt: 'Person sitting at a wooden desk with paper note organizer, pencil and tablet.',
    },
  ]

  export default {
    setup() {
      return {
        collections,
      }
    },
    el: "#video",
    data: () => ({
    images: [
      "https://mdbcdn.b-cdn.net/img/video/Tropical.mp4",
      "https://mdbcdn.b-cdn.net/img/video/forest.mp4",
      "https://mdbcdn.b-cdn.net/img/video/Agua-natural.mp4"
    ],
    active: 0
  }),
  mounted() {
    let i = 0;
    setInterval(() => {
      if (i > this.images.length - 1) {
        i = 0;
      }
      this.active = i;
      i++;
    }, 20000);
  }
  }
</script>
<style>
  .left-full {
    left: -100%;
  }

  .carousel-item {
    float: left;
    position: relative;
    display: block;
    width: 100%;
    margin-right: -100%;
    backface-visibility: hidden;
  }

  .carousel-item.active {
    left: 0;
  }
</style>
