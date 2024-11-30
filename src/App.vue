<script setup>
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";

</script>


<template>
  <div class="bg-neutral">
    <NavBar />
    <router-view />
    <Footer />
  </div>
</template>

<style scoped>
</style>
