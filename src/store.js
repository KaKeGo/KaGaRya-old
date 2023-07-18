import { configureStore } from "@reduxjs/toolkit"

import profileListReducer from "./slices/Accounts/profileList"
import todoPlanReducer from "./slices/Todo/todoPlanList"
import todoPlanDetailReducer from './slices/Todo/TodoPlanDetail'
import loginReducer from './slices/Accounts/account'
import registerReducer from './slices/Accounts/register'


const store = configureStore({
    reducer: {
        profileList: profileListReducer,
        login: loginReducer,
        register: registerReducer,

        todoPlan: todoPlanReducer,
        todoPlanDetail: todoPlanDetailReducer,
    }
})


export default store
