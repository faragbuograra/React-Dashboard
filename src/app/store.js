import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
// import { apiSlice } from "./api/apiSelice";
import authReducer from "../features/user";
import themeReducer from "../features/theme";
import { apiSlice } from "./Selice/apiSelice";
export default  configureStore({
    reducer: {
       
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth:authReducer,
        theme: themeReducer,

        
      
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(apiSlice.middleware)


})