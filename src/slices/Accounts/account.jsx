import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

import { BASE_API_URL, DEV_API_URL} from '../../apiConfig'


export const Login = createAsyncThunk(
        'login/Login', 
        async ({ email, password}) => 
        {
        try {
            const response = await axios.post(
                `${DEV_API_URL}accounts/profile/login/`,
                { email, password },
            )
            return response.data
        } catch (error) {
            throw new Error('Cant login' + error.message)
        }
})

const initialState = {
    loading: false,
    error: null,
    loggedIn: false,
}

const loginSlice = createSlice({
    name: 'login',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(Login.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(Login.fulfilled, (state, action) => {
                state.loading = false
                state.loggedIn = true
            })
            .addCase(Login.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message
            })
    }
})


export default loginSlice.reducer
