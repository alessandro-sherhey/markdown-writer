import { configureStore } from "@reduxjs/toolkit";
import mdReducer from './MDSlice';
import keysReducer from './KeysSlice';

const store = configureStore({
    reducer: {
        md: mdReducer,
        keys: keysReducer
    }
})

export default store;