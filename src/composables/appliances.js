import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

axios.defaults.baseURL = 'http://127.0.0.1:8000/api/'

export default function useAppliances() {
    const appliances = ref([])
    const appliance = ref([])
    const errors = ref([])
    const router = useRouter()

    const getAppliances = async () => {
        const response = await axios.get('appliance')
        appliances.value = response.data
    }

    const getAppliance = async (id) => {
        const response = await axios.get(`appliance/${id}`)
        appliance.value = response.data
    }

    const storeAppliance = async (data) => {
        try {
            await axios.post('appliance', data)
            await router.push({ name: 'ApplianceIndex' })
        } catch (error) {
            if (error.response.status === 422) {
                errors.value = error.response.data.errors
            }
        }
    }

    const updateAppliance = async (id) => {
        try {
            await axios.put(`appliance/${id}`, appliance.value)
            await router.push({ name: 'ApplianceIndex' })
        } catch (error) {
            if (error.response.status === 422) {
                errors.value = error.response.data.errors
            }
            if (error.response.status === 404) {
                errors.value = error.response.data.errors
            }
        }
    }

    const destroyAppliance = async (id) => {
        try {
            if (!window.confirm('Quer realmente excluir esse eletrodoméstico?')) {
                return
            }
            await axios.delete(`appliance/${id}`)
            await getAppliances()
            await router.push({ name: 'ApplianceIndex' })
        } catch (error) {
            if (error.response.status === 404) {
                errors.value = error.response.data.errors
            }
        }
    }
    return {
        appliances,
        appliance,
        getAppliances,
        getAppliance,
        storeAppliance,
        updateAppliance,
        destroyAppliance,
        errors
    }
}
