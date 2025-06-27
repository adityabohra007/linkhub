import { createSlice } from "@reduxjs/toolkit";
export const auth = createSlice({
    name: 'auth',
    initialState: { token: undefined, refresh_token: "", loggedIn: false },
    reducers: {
        setLoggedIn: (state, payload) => {
            state.loggedIn = payload;
        },
        addToken: (state, action) => {
            if (action.payload !== -1) {
                console.log(action.payload, 'payload');
                // setLocalStorage("auth-token", action.payload);
                state.token = action.payload
                state.loggedIn = true
            }
        },
        removeToken: (state) => {
            state.token = null;
            // setLocalStorage("auth-token");
            state.loggedIn = false;

        }
    }
})

export const { addToken, removeToken, setLoggedIn } = auth.actions
export default auth.reducer;