import{createSlice} from '@reduxjs/toolkit'

const usersSlice = createSlice({
    name: "users",
    initialState:{
        users: null,
        allusers: [],
    },
    reducers:{
        SetUser(state , action){
            state.users = action.payload;
        },
        SetAllusers(state , action){
            state.allusers = action.payload;
        },
    },
});
export const {Setuser , SetAllusers} = usersSlice.actions;
export default usersSlice.reducer;