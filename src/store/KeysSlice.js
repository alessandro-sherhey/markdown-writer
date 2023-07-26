import { createSlice } from "@reduxjs/toolkit";

const KeysSlice = createSlice({
    name: 'keys',
    initialState: {
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
        6: false,

        meta: false,
        control: false,
        alt: false,

        b: false,
        i: false,
        s: false,
        q: false,
        u: false,
        o: false,
        l: false
    },
    reducers: {
        keyPressed: (state, action) => { state[action.payload] = true },
        keyUnpressed: (state, action) => { state[action.payload] = false }
    }
})

export const { keyPressed, keyUnpressed } = KeysSlice.actions;
export default KeysSlice.reducer;