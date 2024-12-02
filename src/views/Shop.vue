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
            <div v-for="product in productStore.productList" :key="product.id">
                <img class="object-cover object-center w-full h-64 rounded-lg lg:h-80 outline outline-4 outline-offset-4 outline-primary/40" :src="product.imgSrc" alt="">

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
import { useProductStore } from '../stores';

const productStore = useProductStore();

</script>

<style lang="scss" scoped>

</style>