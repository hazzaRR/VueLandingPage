<template>
    <div>
        <section class="bg-neutral">
    <div class="container px-6 py-10 mx-auto">
        <h1 class="text-2xl font-semibold text-primary lg:text-3xl">FAQ's</h1>

        <hr class="my-6 border-gray-200">

        <div>

            <div v-for="(faq, index) in faqs" :key="index">
                <div>
                    <button @click="faq.open = !faq.open" class="flex items-center focus:outline-none">
                        <svg v-if="!faq.open" xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0 w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                        </svg>
                        <svg v-else class="flex-shrink-0 w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"></path></svg>
                        
                        <h1 class="mx-4 text-xl text-content">{{faq.question}}</h1>
                    </button>
                    
                    <div v-if="faq.open" class="flex mt-8 md:mx-10">
                        <span class="border border-primary"></span>
                        
                        <p class="max-w-3xl px-4 text-content">
                            {{faq.answer}}
                        </p>
                    </div>
                </div>
                
                <hr class="my-8 border-gray-200">
            </div>
        </div>
    </div>
</section>

    </div>
</template>

<script setup>
import {ref} from 'vue'

const faqs = ref([
    {
    question: "How can I pay for my appointment?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, eum quae. Harum officiis reprehenderit ex quia ducimus minima id provident molestias optio nam vel, quidem iure voluptatem, repellat et ipsa.",
    open: false,
    },
    {
    question: "How do I book an appointment?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, eum quae. Harum officiis reprehenderit ex quia ducimus minima id provident molestias optio nam vel, quidem iure voluptatem, repellat et ipsa.",
    open: false,
    },
    {
    question: "What are your opening hours?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, eum quae. Harum officiis reprehenderit ex quia ducimus minima id provident molestias optio nam vel, quidem iure voluptatem, repellat et ipsa.",
    open: false,
    },
    {
    question: "Do I need to do a patch test?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, eum quae. Harum officiis reprehenderit ex quia ducimus minima id provident molestias optio nam vel, quidem iure voluptatem, repellat et ipsa.",
    open: false,
    },
]);

</script>

<style lang="scss" scoped>

</style>