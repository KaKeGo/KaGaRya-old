import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import Cookies from 'js-cookie';

import { BASE_API_URL, DEV_API_URL} from '../../apiConfig'


export const fetchUserAuthCheck = createAsyncThunk(
    'authCheck/fetchUserAuthCheck',
    async () => {
        try {
            const response = await axios.get(
                `http://localhost:8000/accounts/authcheck/`,
            )
            return response.data
        } catch (error) {
            throw new Error('Failed to check user authentication status: ' + error.message)
        }
    }
)

const initialState = {
    userData: null,
    loading: false,
    isAuthenticated : false,
    error: null,
}

const authCheckSlice = createSlice({
    name: 'authCheck',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUserAuthCheck.pending, (state) => {
                state.loading = true
                state.error = false
            })
            .addCase(fetchUserAuthCheck.fulfilled, (state, action) => {
                state.loading = false
                state.isAuthenticated = !!action.payload.user
                state.userData = action.payload['user']
            })
            .addCase(fetchUserAuthCheck.rejected, (state, action) => {
                state.loading = false
                state.isAuthenticated = false
                state.error = action.error.message
            })
    }
})


export default authCheckSlice.reducer
