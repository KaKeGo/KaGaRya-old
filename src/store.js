import { configureStore } from "@reduxjs/toolkit"

import profileListReducer from "./slices/Accounts/Profile/profileList"
import todoPlanReducer from "./slices/Todo/todoPlanList"
import todoPlanDetailReducer from './slices/Todo/TodoPlanDetail'
import loginReducer from './slices/Accounts/loginSlice'
import registerReducer from './slices/Accounts/registerSlice'
import logoutReducer from './slices/Accounts/logoutSlice'
import profileReducer from './slices/Accounts/Profile/profileDetailSlice'
import authCheckReducer from './slices/Accounts/authCheckSlice'


const store = configureStore({
    reducer: {
        // User
        authCheck: authCheckReducer,

        login: loginReducer,
        register: registerReducer,
        logout: logoutReducer,

        profile: profileReducer,
        profileList: profileListReducer,

        // Todo 
        todoPlan: todoPlanReducer,
        todoPlanDetail: todoPlanDetailReducer,
    }
})


export default store
