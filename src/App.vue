<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <header>
        <div class="max-w-7xl mx-auto">
            <nav class="p-5">
                <RouterLink class="px-5 py-3 mr-4 bg-indigo-500 hover:bg-indigo-600 rounded text-white" to="/">Home</RouterLink>
                <RouterLink class="px-5 py-3 mr-4 bg-indigo-500 hover:bg-indigo-600 rounded text-white" to="/appliances">Eletrodomésticos</RouterLink>
            </nav>
        </div>
    </header>

    <main class="max-w-7xl mx-auto min-h-screen">
        <RouterView />
    </main>
</template>
