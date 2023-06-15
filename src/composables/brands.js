import { ref } from 'vue'
import axios from 'axios'

axios.defaults.baseURL = 'http://127.0.0.1:8000/api/'

export default function useBrands() {
    const brands = ref([])

    const getBrands = async () => {
        const response = await axios.get('brands')
        brands.value = response.data.data
    }

    return {
        getBrands,
        brands
    }
}
