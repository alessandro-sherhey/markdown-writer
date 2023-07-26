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

        ctrl: false,
        alt: false,

        opt: false,
        cmd: false,

        b: false,
        i: false,
        s: false,
        q: false,
        u: false,
        o: false,
        l: false
    },
    reducers: {
        keyPressed: (state, action) => state[action.payload.key] = true,
        keyUnpressed: (state, action) => state[action.payload.key] = true
    }
})

export const { keyPressed, keyUnpressed } = KeysSlice.actions;
export default KeysSlice.reducer;