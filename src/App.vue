<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <header>
        <div class="max-w-7xl mx-auto">

            <div class=" p-3 text-center ">
                <h1 class=" text-4xl font-bold text-indigo-800 p-2 mx-auto w-full "> GPM - Challenge </h1>
            </div>

            <nav class="p-5 text-center">
                <RouterLink class="px-5 py-3 mr-4 bg-indigo-500 hover:bg-indigo-600 rounded-lg text-white" to="/">Home</RouterLink>
                <RouterLink class="px-5 py-3 mr-4 bg-indigo-500 hover:bg-indigo-600 rounded-lg text-white" to="/appliances">Eletrodomésticos</RouterLink>
            </nav>
        </div>
    </header>

    <main class="max-w-7xl mx-auto min-h-screen">
        <RouterView />
    </main>
</template>
