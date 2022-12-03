import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    products: [],
    isLoading: false,
    cartProducts: [],
}


export const slice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        setProducts: (state, { payload }) => {
            state.products = payload
        },
        setIsLoading: (state, { payload }) => {
            state.isLoading = payload
        },
        addProductToCart: (state, { payload }) => {
            // SEND ID OF PRODUCT TO PAYLOAD. WITH THAT ID WE ARE SEARCHING PRODUCT IN THE FINAL LIST AND ADDING TO THE CART
            const addedProduct = state.products.find(product => product.id === payload)
            state.cartProducts.push(addedProduct)
        },
        removeProductFromCart: (state, {payload}) => {
        state.cartProducts = state.cartProducts.filter((product) =>product.id !== payload )
        }
    },
})


export const { setProducts, setIsLoading, addProductToCart, removeProductFromCart } = slice.actions

export default slice.reducer