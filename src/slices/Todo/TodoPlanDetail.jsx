import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import { KAGARYA_API, DEV_API_URL} from '../../apiConfig'


export const fetchTodoPlanDetail = createAsyncThunk(
    'todoPlanDetail/createAsyncThunk', 
    async (slug) => {
        try {
            const response = await axios.get(
                    `${KAGARYA_API}todo/plan/${slug}/`
                )
            return response.data
        } catch (error) {
            throw new Error('Cant load Plan Detail')
        }
    }
)


const initialState = {
    plan: [],
    loading: false,
    error: null,
}

const todoPlanDetailSlice = createSlice({
    name: 'todoPlanDetail',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTodoPlanDetail.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(fetchTodoPlanDetail.fulfilled, (state, action) =>{
                state.loading = false
                state.plan = action.payload
            })
            .addCase(fetchTodoPlanDetail.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message
            })
    }
})


export default todoPlanDetailSlice.reducer
