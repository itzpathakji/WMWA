import { configureStore } from "@reduxjs/toolkit";
import usersReduser from "./usersSlice";

const store = configureStore({
    reducer: {
        users:usersReduser,
    },
});

export default store;