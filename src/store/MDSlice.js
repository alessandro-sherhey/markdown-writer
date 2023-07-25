import { createSlice } from "@reduxjs/toolkit";

const MDSlice = createSlice({
    name: 'md',
    initialState: "",
    reducers: {
        update: (state, action) => action.payload 
    }
})

export const { update } = MDSlice.actions
export default MDSlice.reducer