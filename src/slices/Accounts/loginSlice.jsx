import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import Cookie from 'js-cookie';

import { KAGARYA_API, DEV_API_URL} from '../../apiConfig'


export const Login = createAsyncThunk(
        'login/Login', 
        async ({ email, password}) => 
        {
        const csrftoken = Cookie.get('csrftoken')

        const config = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-CSRFToken': csrftoken
            }
        }

        try {
            const response = await axios.post(
                `${KAGARYA_API}accounts/profile/login/`,
                { email, password },
                config,
            )
            return response.data
        } catch (error) {
            throw new Error('Cant login' + error.message)
        }
})

const initialState = {
    loading: false,
    error: null,
    isAuthenticated : false,
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
                state.isAuthenticated = true
            })
            .addCase(Login.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message
            })
    }
})


export default loginSlice.reducer
