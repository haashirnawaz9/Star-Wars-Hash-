import { configureStore, createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: "user",
    initialState: { isLoggedIn: false },
    reducers: {
        login(state) {
            state.isLoggedIn = true
        },
        logout(state) {
            state.isLoggedIn = false
        }
    }

})

export const {login, logout} = userSlice.actions

export const store = configureStore({
    reducer: userSlice.reducer
})