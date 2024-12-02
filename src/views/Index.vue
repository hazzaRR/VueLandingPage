<template>
  <section
    class="container flex flex-col items-center px-6 py-12 mx-auto lg:flex-row"
  >
    <div class="lg:w-1/2">
      <h1
        class="max-w-xl font-serif text-4xl font-medium tracking-wide text-primary capitalize md:text-6xl"
      >
        We're a Match made in heaven 
      </h1>

      <!-- <p class="max-w-lg mt-4 text-content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At magnam
        voluptatibus perferendis odit optio.
      </p> -->

      <div class="mt-6 sm:flex sm:items-center">
        <router-link
          to="/shop"
          class="bg-primary hover:bg-primary/80 duration-300 transition-colors border-2 border-primary px-6 block text-center py-3 uppercase text-sm font-bold leading-4 tracking-widest text-content"
        >
          Shop Now
        </router-link>

        <!-- <router-link
          to="/contact"
          class="border-2 text-sm duration-300 transition-colors bg-primary hover:bg-primary/80 font-bold leading-4 mt-4 sm:mt-0 tracking-widest text-content sm:mx-4 border-primary px-6 block text-center py-3 uppercase"
        >
          Contact
        </router-link> -->
      </div>
    </div>

    <div
      class="h-[38rem] mt-12 lg:mt-0 w-full mx-auto max-w-md overflow-hidden rounded-t-full outline outline-4 outline-offset-4 outline-primary/40"
    >
      <img
        class="object-cover w-full h-full rounded-t-full"
        src="https://images.unsplash.com/photo-1531163859947-fa484f6eacd5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        alt="main page"
      />
              <router-link
          to="/shop"
          class="bg-primary hover:bg-primary/80 duration-300 transition-colors border-2 border-primary px-6 block text-center py-3 uppercase text-sm font-bold leading-4 tracking-widest text-content"
        >
          Shop Now
        </router-link>
    </div>
  </section>

  <section class="bg-primary mt-12">
    <div class="container flex flex-col px-6 py-16 mx-auto mt-12">
      <div
        class="order-2 mt-8 lg:order-1 lg:mt-0 lg:flex lg:items-center lg:-mx-6"
      >
        <img
          class="object-cover w-full lg:w-1/2 lg:mx-6 h-72 lg:h-96"
          src="https://images.unsplash.com/photo-1598901847919-b95dd0fabbb6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
          alt=""
        />

        <div class="mt-8 lg:w-1/2 lg:mx-6 lg:mt-0">
          <h3
            class="font-serif text-2xl text-content capitalize md:text-4xl lg:text-5xl"
          >
            Get to know MooMoo
          </h3>

          <p class="mt-4 text-content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
            nisi fugiat dicta impedit sed quisquam quas veritatis consectetur
            neque saepe, autem facilis dolore officiis minima explicabo
            perferendis ab porro magnam!
          </p>

          <!-- <router-link
            class="inline-flex px-6 py-3 mt-6 text-white border-2 border-white hover:bg-white duration-300 transition-colors"
            to="/gallery"
          >
            See More
          </router-link> -->
        </div>
      </div>

      <!-- <img
        class="order-1 object-cover lg:order-2 w-ful h-72 lg:h-96 lg:mt-12"
        src="https://images.unsplash.com/photo-1610462275440-4ea0976f46f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
        alt=""
      /> -->
    </div>
  </section>

  <section class="container px-6 py-12 mx-auto lg:py-16">
    <h3
      class="font-serif text-3xl text-primary capitalize md:text-4xl lg:text-5xl"
    >
       Updates
    </h3>


    <div class="relative flex flex-row justify-around items-center flex-wrap" ref="embedContainer">
    <InstagramPost :embedUrl="'https://www.instagram.com/p/DC4niRIt8wD/'" />
    <InstagramPost :embedUrl="'https://www.instagram.com/p/DCws3zrNOpC/'" />
    </div>

    <!-- <div class="mt-8 xl:-mx-6 xl:flex">
      <div class="xl:w-1/2 xl:mx-6">
        <img
          class="object-cover w-full h-96"
          src="https://images.unsplash.com/photo-1626838524909-7c584c2266f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          alt=""
        />

        <h2 class="mt-6 font-serif text-3xl font-medium text-content">
          Now Accepting Card Payments
        </h2>

        <p class="mt-2 text-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt
          facilisis nuncLorem ipsum dolor sit.Lorem ipsum dolor sit amet,
          consectetur adipiscing elit...
        </p>

        <p class="mt-4 italic text-content">December 23, 2021</p>
      </div>

      <div class="mt-8 space-y-8 xl:w-1/2 xl:mx-6 xl:mt-0">
        <div class="md:-mx-4 md:flex md:items-center">
          <img
            class="object-cover w-full h-56 md:h-48 md:mx-4 md:w-80 shrink-0"
            src="https://images.unsplash.com/photo-1556426356-0fdc8b663467?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1498&q=80"
            alt=""
          />

          <div class="mt-6 md:mx-4 md:mt-0">
            <h2 class="font-serif text-2xl font-medium text-content">
              New Nail Polish Colours
            </h2>

            <p class="mt-2 text-content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt
              facilisis nuncLorem ipsum dolor sit...
            </p>

            <p class="mt-4 italic text-content">December 16, 2021</p>
          </div>
        </div>
        

        <div class="md:-mx-4 md:flex md:items-center">
          <img class="object-cover w-full h-56 md:h-48 md:mx-4 md:w-80 shrink-0" src="https://images.unsplash.com/photo-1583470790878-4f4f3811a01f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80" alt="">
  
            <div class="mt-6 md:mx-4 md:mt-0">
              <h2 class="font-serif text-2xl font-medium text-content">Pricing Update</h2>
    
              <p class="mt-2 text-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt facilisis nuncLorem ipsum dolor sit...</p>
    
              <p class="mt-4 italic text-content">November 11, 2021</p>
            </div>
        </div>

        <div class="md:-mx-4 md:flex md:items-center">
          <img
            class="object-cover w-full h-20 md:h-48 md:mx-4 md:w-80 shrink-0"
            src="https://images.unsplash.com/photo-1638790491374-a2affccd8c8a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt=""
          />

          <div class="mt-6 md:mx-4 md:mt-0">
            <h2 class="font-serif text-2xl font-medium text-content">
              New Autumn Colours
            </h2>

            <p class="mt-2 text-content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt
              facilisis nuncLorem ipsum dolor sit...
            </p>

            <p class="mt-4 italic text-content">November 3, 2021</p>
          </div>
        </div>
      </div>
    </div> -->
  </section>
</template>

<script setup>
import InstagramPost from '../components/InstagramPost.vue';
</script>

<style scoped>
.embed-container {
  max-width: 500px;
  max-height: 500px !important;
  margin: auto;
}
</style>
