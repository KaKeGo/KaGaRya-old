import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

import { BASE_API_URL, DEV_API_URL} from '../../apiConfig'


export const authStatus = createAsyncThunk(
    'auth/authStatus',
    async () => {
        try {
            const authenticated = localStorage.getItem('authenticated') === 'true'
            return authenticated
        } catch (error) {
            throw new Error('Failed to fetch auth status:' + error.message)
        }
    }
)

const initialState = {
    loggedIn: false,
    loading: false,
    error: null,
}

const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        setLoggedIn(state, action) {
            state.loggedIn = action.payload
        },
        setLoggedOut(state) {
            state.loggedIn = false
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(authStatus.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(authStatus.fulfilled, (state, action) => {
                state.loading = false
                state.loggedIn = action.payload
            })
            .addCase(authStatus.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message
            })
    }
})


export const { setLoggedIn, setLoggedOut } = authSlice.actions

export default authSlice.reducer
