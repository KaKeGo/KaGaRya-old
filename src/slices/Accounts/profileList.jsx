import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'


export const fetchProfiles = createAsyncThunk('profileList/fetchProfiles', async () => {
    try {
        const response = await axios.get('http://localhost:8000/accounts/profile/list/')
        return response.data
    } catch (error) {
        throw new Error('Cant load profiles')
    }
})


const initialState = {
    profiles: [],
    loading: false,
    error: null,
}

const profileListSlice = createSlice({
    name: 'profileList',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProfiles.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(fetchProfiles.fulfilled, (state, action) => {
                state.loading = false
                state.profiles = action.payload
            })
            .addCase(fetchProfiles.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message
            })
    }
})


export default profileListSlice.reducer
