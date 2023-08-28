import {createSlice} from "@reduxjs/toolkit";



interface IChange {
    value: number,
    label: string,
    selected: boolean,
}

interface ICompany {
    value: string,
    label: string,
    selected: boolean,
}


const initialState:{changes: IChange[], company: ICompany} = {
    changes: [
        {
            value: 0,
            label: 'Без пересадок',
            selected: true,
        },
        {
            value: 1,
            label: '1 пересадка',
            selected: false,
        },
        {
            value: 2,
            label: '2 пересадки',
            selected: false,
        },
        {
            value: 3,
            label: '3 пересадки',
            selected: false,
        },
    ],
    company: {
        value: 'victory',
        label: 'Победа',
        selected: true,
    }
}



const filterSlice = createSlice({
    name: 'filter',
    initialState: initialState,
    reducers: {
        getFilter: (state) => state,

        setFilter: (state, action) => {
            const newState = { ...state }
            newState.changes[action.payload.value] = action.payload;
            return newState
        },
        setCompany: (state, action) => {
            const newState = { ...state };
            newState.company = action.payload;
        },
    }
})

export default filterSlice.reducer;
export const {getFilter, setFilter, setCompany} = filterSlice.actions;
