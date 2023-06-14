<script setup>
import useAppliances from '../../composables/appliances';
import { onMounted } from 'vue';

const { appliances, getAppliances } = useAppliances();

onMounted(() => getAppliances());

</script>

<template>
    <div class="mt-12 px-5 rounded">
        
        <div class="flex justify-end">
            <RouterLink
                class="px-5 py-3 mb-4 bg-indigo-500 hover:bg-indigo-600 rounded text-white"
                :to="{name: 'ApplianceCreate'}">
                Cadastrar
            </RouterLink>
        </div>

        <div class="relative overflow-x-auto">
            <table class="w-full text-sm text-left text-gray-500">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 ">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            Nome
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Descrição
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Tensão
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Marca
                        </th>
                        <th scope="col" class="px-6 py-3">
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="appliance in appliances" :key="appliance.id" class="bg-white border-b">
                        <td class="py-4 px-6"> {{  appliance.name  }} </td>
                        <td class="py-4 px-6"> {{  appliance.description  }} </td>
                        <td class="py-4 px-6"> {{  appliance.eletric_tension  }} </td>
                        <td class="py-4 px-6"> {{  appliance.brand  }} </td>
                        <td class="py-4 px-6"> 
                            Editar / Excluir
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
