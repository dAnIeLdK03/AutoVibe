import { createSlice } from '@reduxjs/toolkit'

interface Car{
    id: number;
    make: string; 
    model: string;
    year: number;
    price: number;
    mileage: number;
    fuelType: string;
    transmission: string;
    color: string;
    shorDescription?: string;
}

interface CarState{
    cars: Car[];
    selectedCar: Car | null;
    loading: boolean;
    error: string | null;
}

const initialState : CarState = {
    cars: [],
    selectedCar: null,
    loading: false,
    error: null
}

const carsSlice = createSlice({
    name: 'cars',
    initialState,
    reducers: {
        setCars : (state, action) => {
            state.cars = action.payload;
        },
        setSelectedCar: (state, action) => {
            state.selectedCar = action.payload;
        },
        addCar: (state, action) => {
            state.cars.push(action.payload);
        },
        updateCar: (state, action) => {
            const index = state.cars.findIndex(car => car.id === action.payload.id);
            state.cars[index] = action.payload;
        },
        removeCar: (state, action) => {
            state.cars = state.cars.filter(car => car.id !== action.payload);
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
        clearError: (state) => {
            state.error = null;
        }
    }
})

export const {setCars, setSelectedCar, addCar, updateCar, removeCar, setLoading, setError, clearError } = carsSlice.actions;

export default carsSlice.reducer;