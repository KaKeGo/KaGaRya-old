import { configureStore } from "@reduxjs/toolkit"

import profileListReducer from "./slices/Accounts/profileList"
import todoPlanReducer from "./slices/Todo/todoPlanList"
import todoPlanDetailReducer from './slices/Todo/TodoPlanDetail'
import loginReducer from './slices/Accounts/account'
import registerReducer from './slices/Accounts/register'
import logoutReducer from './slices/Accounts/logout'
import profileReducer from './slices/Accounts/profileDetailSlice'
import authCheckReducer from './slices/Accounts/authCheckSlice'


const store = configureStore({
    reducer: {
        authCheck: authCheckReducer,

        profile: profileReducer,
        profileList: profileListReducer,
        login: loginReducer,
        register: registerReducer,
        logout: logoutReducer,

        todoPlan: todoPlanReducer,
        todoPlanDetail: todoPlanDetailReducer,
    }
})


export default store
