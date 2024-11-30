<template>
    <section class="bg-white">
        <div class="container flex items-center min-h-screen px-6 py-12 mx-auto">
            <div class="flex flex-col items-center max-w mx-auto text-center">
                <p class="p-3 text-sm font-medium text-primary rounded-md bg-blue-50">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                    </svg>
                </p>
                <h1 class="mt-3 text-2xl font-semibold text-content md:text-3xl">Page not found</h1>
                <p class="mt-4 text-content">The page you are looking for doesn't exist. Here are some helpful links:</p>
    
                <div class="mt-6 flex flex-col items-center sm:flex-row">
                    <button @click="back" class="flex items-center justify-center border-2 text-sm duration-300 transition-colors hover:bg-primary hover:text-content font-bold leading-4 mt-2 sm:mt-0 tracking-widest text-primary sm:mx-2 border-primary px-6 text-center py-3 uppercase h-[2.5rem]">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                        </svg>
    
                        <span>Go back</span>
                    </button>
    
                    <button @click="home" class="bg-primary hover:bg-primary/80 duration-300 transition-colors border-2 border-primary mt-2 sm:mt-0 sm:mx-2 px-6 block text-center py-3 uppercase sm:text text-sm font-bold leading-4 tracking-widest text-content h-[2.5rem]">
                        Take me home
                    </button>
                </div>

            </div>
        </div>
    </section>
    </template>
    
    <script setup>
    import { useRouter } from 'vue-router';
    
    const router = useRouter();
    
    
    const back = () => {
        router.go(-1);
    }
    
    const home = () => {
        router.push("/");
    }
    
    </script>
    
    <style lang="scss" scoped>
    
    </style>