import { createSlice } from "@reduxjs/toolkit";

const MDSlice = createSlice({
    name: 'md',
    initialState: "",
    reducers: {
        update: (state, action) => action.payload,
        addSpecial: (state, action) => state += action.payload
    }
})

export const { update, addSpecial } = MDSlice.actions
export default MDSlice.reducer