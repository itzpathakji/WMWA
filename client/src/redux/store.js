import { configureStore } from "@reduxjs/toolkit";
import usersReduser from "./usersSlice";
import loadersReducer from "./loadersSlice";
const store = configureStore({
    reducer: {
        users:usersReduser,
        loaders:loadersReducer

    },
});

export default store;