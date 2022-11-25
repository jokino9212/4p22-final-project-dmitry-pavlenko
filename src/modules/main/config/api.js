import axios from 'axios'

const fetchProducts = async () => {
    try {
        const response = await axios.get('https://api.escuelajs.co/api/v1/categories/3/products')
        // const response = await axios.get('https://fakestoreapi.com/products')
        return response.data
    } catch (e) {
        console.log(e)
    }
}
const api = { fetchProducts }

export default api



// const response = await axios.get('https://api.escuelajs.co/api/v1/products')