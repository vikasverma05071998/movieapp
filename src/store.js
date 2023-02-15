import { configureStore } from '@reduxjs/toolkit'
import reducerSlice from './reducerSlice'
const store = configureStore({
        reducer:{
            movie:reducerSlice
        }
})
export default store