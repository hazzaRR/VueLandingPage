<template>
    <div>
        <section class="bg-neutral">
            <div class="container px-6 py-10 mx-auto lg:w-3/4 w-full">
                <h1 class="max-w-xl font-serif text-4xl font-medium tracking-wide text-primary capitalize md:text-6xl">
                    Price List
                </h1>

                <hr class="mt-6 border-gray-200">

                <div>

                    <div v-for="(treatmentCategory, categoryIndex) in treatments" :key="categoryIndex">
                        <h1 class="text-2xl mt-6 font-semibold v lg:text-3xl text-accent">{{ treatmentCategory.category }}
                        </h1>
                        <hr class="my-6 border-contnet">
                        <div v-for="(treatment, index) in treatmentCategory.treatments" :key="index">
                            <div class="flex items-center justify-between focus:outline-none">
                                <div class="flex items-center focus:outline-none">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"
                                        class="w-4 h-4">
                                        <path fill-rule="evenodd" fill="#F9EBA9"
                                            d="M5 4a.75.75 0 0 1 .738.616l.252 1.388A1.25 1.25 0 0 0 6.996 7.01l1.388.252a.75.75 0 0 1 0 1.476l-1.388.252A1.25 1.25 0 0 0 5.99 9.996l-.252 1.388a.75.75 0 0 1-1.476 0L4.01 9.996A1.25 1.25 0 0 0 3.004 8.99l-1.388-.252a.75.75 0 0 1 0-1.476l1.388-.252A1.25 1.25 0 0 0 4.01 6.004l.252-1.388A.75.75 0 0 1 5 4ZM12 1a.75.75 0 0 1 .721.544l.195.682c.118.415.443.74.858.858l.682.195a.75.75 0 0 1 0 1.442l-.682.195a1.25 1.25 0 0 0-.858.858l-.195.682a.75.75 0 0 1-1.442 0l-.195-.682a1.25 1.25 0 0 0-.858-.858l-.682-.195a.75.75 0 0 1 0-1.442l.682-.195a1.25 1.25 0 0 0 .858-.858l.195-.682A.75.75 0 0 1 12 1ZM10 11a.75.75 0 0 1 .728.568.968.968 0 0 0 .704.704.75.75 0 0 1 0 1.456.968.968 0 0 0-.704.704.75.75 0 0 1-1.456 0 .968.968 0 0 0-.704-.704.75.75 0 0 1 0-1.456.968.968 0 0 0 .704-.704A.75.75 0 0 1 10 11Z"
                                            clip-rule="evenodd" />
                                    </svg>

                                    <h2 class="mx-4 text-xl text-content">{{ treatment.name }}</h2>
                                </div>
                                <h3 class="mx-4 text-xl text-content">£{{ treatment.price.toFixed(2) }}</h3>
                            </div>
                            <hr class="my-2 border-gray-200">
                        </div>

                    </div>
                </div>
            </div>
        </section>

    </div>
</template>

<script setup>
import { ref } from 'vue'

const treatments = ref([
    {
        category: "Hands and Feet",
        treatments: [
            { name: "Manicure (Opi Polish) 1 HR", price: 23 },
            { name: "Pedicure", price: 28 },
            { name: "Opi Shape and Polish", price: 15 },
            { name: "Nails Cut and Shaped No Polish", price: 13 },
            { name: "Mens Pedicure", price: 23 },
        ],
    },
    {
        category: "Gel Nails",
        treatments: [
            { name: "Gel Polish Manicure", price: 25 },
            { name: "Gel Polish Pedicure", price: 25 },
            { name: "Full Pedicure with Gel Polish", price: 35 },
            { name: "Gel Removal - Shape, Buff and Oil", price: 16 },
        ],
    },
    {
        category: "Facials",
        treatments: [],
    },
]);

</script>

<style lang="scss" scoped></style>