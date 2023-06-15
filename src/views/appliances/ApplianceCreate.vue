<script setup>

import { onMounted, reactive } from 'vue';

import useAppliances from '../../composables/appliances';
import useBrands from '../../composables/brands';

const { storeAppliance, errors } = useAppliances();
const { brands, getBrands } = useBrands();

const form = reactive({
    name: "",
    description: "",
    eletric_tension: "220v",
    brand_id: 1
})

onMounted(() => getBrands());

</script>

<template>
    <div class="mt-12">
        <form @submit.prevent="storeAppliance(form)">
            <div class="mb-6 px-5">
                <label for="name" class="block mb-2 text-sm font-medium text-gray-900">Nome</label>
                <input v-model="form.name" type="text" placeholder="Geladeira Eletrolux" id="name" class="block w-full p-4 text-gray-700 border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500">
                <div v-if="errors.name">
                    <span class="text-small text-red-400"> {{ errors.name[0] }} </span>
                </div>
            </div>
            <div class="mb-6 px-5">
                <label for="description" class="block mb-2 text-sm font-medium text-gray-900">Descrição</label>
                <input v-model="form.description" type="text" placeholder="Economia garantida." id="description" class="block w-full p-4 text-gray-700 border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500">
                <div v-if="errors.description">
                    <span class="text-small text-red-400"> {{ errors.description[0] }} </span>
                </div>
            </div>
            <div class="mb-6 px-5">
                <label for="eletric_tension" class="block mb-2 text-sm font-medium text-gray-900">Tensão</label>
                
                <select v-model="form.eletric_tension" id="eletric_tension" class="block w-full p-4 text-gray-700 border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500">
                    <option value="110v"> 110v </option>
                    <option value="220v"> 220v </option>
                </select>
            </div>
            <div class="mb-6 px-5">
                <label for="brand_id" class="block mb-2 text-sm font-medium text-gray-900">Selecione a marca</label>
                
                <select id="brand_id" v-model="form.brand_id" class="block w-full p-4 text-gray-700 border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500">
                    <option v-for="brand in brands" :key="brand.id" :value="brand.id" selected>
                        {{ brand.name }}
                    </option>
                </select>
            </div>
            <div class="mt-4 flex justify-center">
                <button type="submit" class="px-5 py-3 mb-4 mr-5 bg-indigo-500 hover:bg-indigo-600 rounded text-white">
                    Cadastrar Eletrodoméstico
                </button>
            </div>
        </form>
    </div>
</template>