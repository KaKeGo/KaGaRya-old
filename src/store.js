import { configureStore } from "@reduxjs/toolkit"

import profileListReducer from "./slices/Accounts/profileList"
import todoPlanReducer from "./slices/Todo/todoPlanList"
import todoPlanDetailReducer from './slices/Todo/TodoPlanDetail'


const store = configureStore({
    reducer: {
        profileList: profileListReducer,
        todoPlan: todoPlanReducer,
        todoPlanDetail: todoPlanDetailReducer,
    }
})


export default store
