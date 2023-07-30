import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from '../../axiosConfig'
import Cookie from 'js-cookie';

import { KAGARYA_API, DEV_API_URL} from '../../apiConfig'


export const Register = createAsyncThunk(
        'register/Register',
        async ({ 
                username, email, password, confirm_password
            }) => {
            const csrftoken = Cookie.get('csrftoken')
            const config = {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'X-CSRFToken': csrftoken
                },
                withCredentials: true,
            }
            try {
                const response = await axios.post(
                    `${KAGARYA_API}accounts/profile/create/`,
                    { username, email, password, confirm_password },
                    config,
                )
                return response.data
            } catch (error) {
                throw new Error('Failed to register user: ' + error.message)
            }
        }
)


const initialState = {
    user: {},
    loading: false,
    error: null,
    registered: false,
}

const registerSlice = createSlice({
    name: 'register',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(Register.pending, (state) => {
                state.loading = true
                state.error = null
                state.registered = false
            })
            .addCase(Register.fulfilled, (state, action) => {
                state.loading = false
                state.registered = true
                state.user = action.payload
            })
            .addCase(Register.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message
            })
    }
})


export default registerSlice.reducer
