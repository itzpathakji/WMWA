import{createSlice} from '@reduxjs/toolkit'

const usersSlice = createSlice({
    name: "users",
    initialState:{
        user: null,
        allusers: [],
    },
    reducers:{
        SetUser(state , action){
            state.users = action.payload;
        },
        SetAllUsers(state , action){
            state.allusers = action.payload;
        },
    },
});
export const {Setuser , SetAllUsers} = usersSlice.actions;
export default usersSlice.reducer;