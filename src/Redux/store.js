import { configureStore } from "@reduxjs/toolkit";
import UserAuthSliceReducer from "./Slices/UserAuthSlice";

const store = configureStore({
    reducer:{
        user_Auth: UserAuthSliceReducer
    }
});

export default store;