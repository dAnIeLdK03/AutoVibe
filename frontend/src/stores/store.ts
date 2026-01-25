import { configureStore } from '@reduxjs/toolkit'
import authReducer from './authSlice'
import carsReducer from './carsSlice'


export const store = configureStore({
    reducer: {
        auth: authReducer,
        cars: carsReducer
    }
})