import { createSlice } from "@reduxjs/toolkit";

const initialState: { statusList: string[] } = {
    statusList: []
};

const StatusSlice = createSlice({
    name: 'Status',
    initialState,
    reducers: {
        addStatus: (state, action) => {
            state.statusList.push(action.payload.path);
        },
        removeStatus: (state, action) => {
            state.statusList = state.statusList.filter((status) => status !== action.payload);
        },


    }
})

export const { addStatus, removeStatus } = StatusSlice.actions
export default StatusSlice.reducer