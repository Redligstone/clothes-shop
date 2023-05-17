 import { configureStore } from '@reduxjs/toolkit'
 import categories from './slices/categories_slice'
import cart from './slices/cart_slice'
import products from './slices/products__slice'
// import { type } from 'os'



export const store = configureStore({
  reducer: {
    cart,
    categories,
    products,
  },
})
 
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


