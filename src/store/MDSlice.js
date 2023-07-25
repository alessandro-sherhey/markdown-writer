import { createSlice } from "@reduxjs/toolkit";

const MDSlice = createSlice({
    name: 'md',
    initialState: "",
    reducers: {
        update: (state, action) => ({ ...state, state: action.payload}) 
    }
})

export const { update } = MDSlice.actions
export default MDSlice.reducer