import { configureStore } from "@reduxjs/toolkit"

import profileListReducer from "./slices/Accounts/profileList"
import todoPlanReducer from "./slices/Todo/todoPlanList"
import todoPlanDetailReducer from './slices/Todo/TodoPlanDetail'
import loginReducer from './slices/Accounts/account'
import registerReducer from './slices/Accounts/register'
import authReducer from './slices/Accounts/auth'
import logoutReducer from './slices/Accounts/logout'


const store = configureStore({
    reducer: {
        auth: authReducer,

        profileList: profileListReducer,
        login: loginReducer,
        register: registerReducer,
        logout: logoutReducer,

        todoPlan: todoPlanReducer,
        todoPlanDetail: todoPlanDetailReducer,
    }
})


export default store
