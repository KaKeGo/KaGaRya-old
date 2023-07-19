import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

import { getCookie } from '../../CSRFToken'

import { BASE_API_URL, DEV_API_URL} from '../../apiConfig'


export const Login = createAsyncThunk(
        'login/Login', 
        async ({ email, password}) => 
        {
        const csrftoken = getCookie('csrftoken')
        try {
            const response = await axios.post(
                `${BASE_API_URL}accounts/profile/login/`,
                { email, password },
                {
                    headers: {
                        'X-CSRFToken': csrftoken,
                        'Content-Type': 'application/json',
                    }
                }
            )
            return response.data
        } catch (error) {
            throw new Error('Cant login' + error.message)
        }
})

const initialState = {
    user: {},
    loading: false,
    error: null,
    loggedIn: false
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
                state.loggedIn = false
                state.user = null
            })
            .addCase(Login.fulfilled, (state, action) => {
                state.loading = false
                state.loggedIn = true
                state.user = action.payload
            })
            .addCase(Login.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message
            })
    }
})


export default loginSlice.reducer
