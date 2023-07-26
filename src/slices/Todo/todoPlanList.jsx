import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

import { BASE_API_URL, DEV_API_URL} from '../../apiConfig'


const fetchTodoPlan = createAsyncThunk('todoPlan/fetchTodoPlan', 
    async () => {
        try {
            const response = await axios.get(
                    `http://localhost:8000/todo/plan/`
                )
            return response.data
        } catch (error) {
            throw new Error('Cant load Todo Plan' + error.message) 
        }
    }
)


const initialState = {
    plan: [],
    loading: false,
    error: null,
}

const todoPlanSlice = createSlice({
    name: 'todoPlan',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTodoPlan.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(fetchTodoPlan.fulfilled, (state, action) => {
                state.loading = false
                state.plan = action.payload
            })
            .addCase(fetchTodoPlan.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message
            })
    }
})


export { fetchTodoPlan }
export default todoPlanSlice.reducer
