<template>
<section class="bg-neutral">
    <div class="container px-6 py-10 mx-auto">
        <div class="text-center">
            <h1 class="text-2xl font-semibold text-content capitalize lg:text-3xl">Our Collection</h1>

            <p class="max-w-lg mx-auto mt-4 text-content">
                Sint reprehenderit ex excepteur qui irure reprehenderit dolore deserunt enim nulla.
            </p>
        </div>

        <hr class="my-8 border-gray-200">

        <div class="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
            <div v-for="product in products" :key="product.id">
                <img class="object-cover object-center w-full h-64 rounded-lg lg:h-80" :src="product.imgSrc" alt="">

                <div class="mt-8">
                    <h1 class="mt-4 text-xl font-semibold text-primary">
                        {{ product.title }}
                    </h1>

                    <p class="mt-2 text-content">
                        {{ product.description }}
                    </p>

                    <div class="flex items-center justify-between mt-2">
                        <div>
                            <p class="text-md font-medium text-secondary hover:underline">
                                {{ product.category }}
                            </p>
                        </div>

                        <!-- <a href="#" class="inline-block text-blue-500 underline hover:text-blue-400">Read more</a> -->
                    </div>

                </div>
            </div>
        </div>
    </div>
</section>
</template>

<script setup>
import { ref } from 'vue';


const products = ref([
    {
        imgSrc : "https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        title: "Test Product",
        description: "Ea incididunt deserunt esse esse eiusmod ea laboris Lorem aute veniam nostrud ex ullamco ut.",
        price: "16.00",
        category: "Rings"
    },
    {
        imgSrc : "https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        title: "Test Product",
        description: "Ea incididunt deserunt esse esse eiusmod ea laboris Lorem aute veniam nostrud ex ullamco ut.",
        price: "16.00",
        category: "Rings"
    },
    {
        imgSrc : "https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        title: "Test Product",
        description: "Ea incididunt deserunt esse esse eiusmod ea laboris Lorem aute veniam nostrud ex ullamco ut.",
        price: "16.00",
        category: "Rings"
    },
    {
        imgSrc : "https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        title: "Test Product",
        description: "Ea incididunt deserunt esse esse eiusmod ea laboris Lorem aute veniam nostrud ex ullamco ut.",
        price: "16.00",
        category: "Rings"
    },
    {
        imgSrc : "https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        title: "Test Product",
        description: "Ea incididunt deserunt esse esse eiusmod ea laboris Lorem aute veniam nostrud ex ullamco ut.",
        price: "16.00",
        category: "Rings"
    },

])

</script>

<style lang="scss" scoped>

</style>