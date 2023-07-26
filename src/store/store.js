import { configureStore } from "@reduxjs/toolkit";
import mdReducer from './MDSlice'

const store = configureStore({
    reducer: {
        md: mdReducer
    }
})

export default store;