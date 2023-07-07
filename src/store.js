import { configureStore } from "@reduxjs/toolkit"

import profileListReducer from "./slices/Accounts/profileList"





const store = configureStore({
    reducer: {
        profileList: profileListReducer
    }
})


export default store
