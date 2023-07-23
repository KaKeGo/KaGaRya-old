import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

import { BASE_API_URL, DEV_API_URL} from '../../apiConfig'


export const Logout = createAsyncThunk(
    'logout/Logout',
    async () => {

        try {
            const response = await axios.post(
                `${DEV_API_URL}accounts/profile/logout/`,
                {},
                {
                    // headers: {
                    //     'X-CSRFToken': csrftoken,
                    //     'Content-Type': 'application/json',
                    // }
                }
            )
            return response.data
        } catch (error) {
            throw new Error('Failed to logout: ' + error.message)
        }
    }
)


const initialState = {
    loggedIn: false,
    loading: false,
    error: null,
}

const logoutSlice = createSlice({
    name: 'logout',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(Logout.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(Logout.fulfilled, (state, action) => {
                state.loading = false
                state.loggedIn = false
            })
            .addCase(Logout.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message
            })
    }
})


export const { setLoggedOut } = logoutSlice.actions
export default logoutSlice.reducer
