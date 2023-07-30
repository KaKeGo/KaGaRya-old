import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

import { KAGARYA_API, DEV_API_URL} from '../../../apiConfig'


export const fetchUserProfile = createAsyncThunk(
    'profile/fetchUserProfile',
    async (slug) => {
        try {
            const response = await axios.get(
                `${KAGARYA_API}accounts/profile/${slug}/`
            )
            return response.data
        } catch (error) {
            throw new Error('Failed to load user profile: ' + error.message)
        }
    }
)

const initialState = {
    userProfile: [],
    loading: false,
    error: null
}

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUserProfile.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(fetchUserProfile.fulfilled, (state, action) => {
                state.loading = false
                state.userProfile = action.payload
            })
            .addCase(fetchUserProfile.rejected, (state, action) => {
                state.loading = false
                state.error = action.message
            })
    }
})


export default profileSlice.reducer
