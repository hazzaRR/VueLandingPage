<template>
    <div>
        <section class="bg-white">
            <div class="container px-6 py-10 mx-auto">
                <div class="text-center">
                    <h1 class="text-2xl font-semibold text-[#243458] capitalize lg:text-3xl">Gallery</h1>
                    <!-- <h1 class="max-w-xl font-serif text-4xl font-medium tracking-wide text-[#243458] capitalize md:text-6xl">Price List</h1> -->

                    <p class="max-w-lg mx-auto mt-4 text-gray-500">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veritatis sint autem nesciunt,
                        laudantium
                        quia tempore delect
                    </p>
                </div>

                <hr class="my-8 border-gray-200">

                <div class="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
                    <div v-for="(img, index) in images" :key="index">
                        <img class="object-cover object-center w-full h-64 lg:h-80" :src="img.url" :alt="img.alt">
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import {ref} from 'vue'

const images = ref([
    {url: "https://images.unsplash.com/photo-1598901847919-b95dd0fabbb6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" ,alt: "image"},
    {url: "https://images.unsplash.com/photo-1610462275440-4ea0976f46f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" ,alt: "image"},
    {url: "https://images.unsplash.com/photo-1556426356-0fdc8b663467?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1498&q=80" ,alt: "image"},
    {url: "https://images.unsplash.com/photo-1626838524909-7c584c2266f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" ,alt: "image"}
])

</script>

<style lang="scss" scoped></style>