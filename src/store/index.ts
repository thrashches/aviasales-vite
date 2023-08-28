import {combineReducers, configureStore} from "@reduxjs/toolkit";
// import filterReducer from "./filterReducer";
import filterSlice from "./filterSlice.ts";


const rootReducer = combineReducers({
    filter: filterSlice,
})

export const store = configureStore({
    reducer: rootReducer,
})
