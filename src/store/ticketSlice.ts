import {createSlice} from "@reduxjs/toolkit";
import {Ticket} from "../mockData/types.ts";
import generateTestData from "../mockData/mockData.ts";


export interface ITicketState {
    tickets: {
        tickets: Ticket[],
    }
}

const initialState= {
    tickets: generateTestData(),
}

const ticketSlice = createSlice({
    name: 'ticket',
    initialState,
    reducers: {
    }
})

export default ticketSlice.reducer;