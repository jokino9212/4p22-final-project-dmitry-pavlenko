import axios from 'axios'

const fetchProducts = async () => {
    try {
        const response = await axios.get('https://api.escuelajs.co/api/v1/categories/3/products')
       
        return response.data
    } catch (e) {
        console.log(e)
    }
}

const fetchProduct = async (productId) => {
    try {
        const response = await axios.get(`https://api.escuelajs.co/api/v1/products/${productId}`)
        
        return response.data
    } catch (e) {
        console.log(e)
    }
}

const api = { fetchProducts, fetchProduct }

export default api



