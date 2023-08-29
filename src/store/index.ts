import {combineReducers, configureStore} from "@reduxjs/toolkit";
// import filterReducer from "./filterReducer";
import filterSlice from "./filterSlice.ts";
import ticketSlice from "./ticketSlice.ts";


const rootReducer = combineReducers({
    filter: filterSlice,
    tickets: ticketSlice,
})

export const store = configureStore({
    reducer: rootReducer,
})
