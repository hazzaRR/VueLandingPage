<template>
  <div>
    <header :class="['relative', 'bg-primary', 'section-with-circles']">
      <div class="container px-6 py-6 h-64 mx-auto flex items-center justify-between">

        <!-- Hamburger Menu Icon -->
        <button
          class="text-content my-auto"
          @click="isOpen = !isOpen"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-8 h-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        <!-- Title -->
        <div class="flex flex-col items-center mt-8">
          <router-link to="/">
            <div class="text-content flex flex-col items-center">
              <h3 class="uppercase tracking-wide text-3xl md:text-6xl text-content font-light font-tanNimbus">
                MooMoo
              </h3>
              <p class="uppercase text-md md:text-xl text-content font-medium">Jewellery</p>
            </div>
          </router-link>
        </div>

        <!-- Spacer for Alignment -->
        <div class="w-6"></div>
      </div>

      <!-- Dropdown Menu -->
      <div
        :class="[isOpen ? 'opacity-100' : 'opacity-0 -translate-x-full invisible', `absolute`, `transition-all`, `duration-300`, `w-full`, `py-12`, `left-1/2`, `-translate-x-1/2`, `top-10`,  'bg-primary', 'section-with-circles', 'z-10']"
      >
        <!-- Close Button -->
        <button
          class="absolute top-4 right-6 text-white"
          @click="isOpen = !isOpen"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-10 h-10 text-content"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <nav class="flex flex-col items-center space-y-8">
          <router-link @click="isOpen = false" v-for="route in routes" :key="route.name" :to="route.link" class="font-medium text-neutral z-20">
            {{route.name }}
          </router-link>
        </nav>
      </div>
    </header>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const routes = [
  {name: "Home", link: "/"},
  {name: "Products", link: "/products"},
  {name: "Price List", link: "/price-list"},
  {name: "Gallery", link: "/gallery"},
  {name: "Contact", link: "/contact"},
  {name: "FAQ", link: "/faq"},
]

const isOpen = ref(false);
</script>

<style scoped>

.section-with-circles::after {
  content: '';
  position: absolute;
  bottom: -30px; /* Adjusted to place the circles fully below the parent */
  left: 0;
  right: 0;
  height: 90px; /* Increased height to fit the full diameter of the circles */
  background: radial-gradient(circle, #ffa889 80%, transparent 30%);
  background-size: 60px; /* Matches the size of the circles */
}
</style>
