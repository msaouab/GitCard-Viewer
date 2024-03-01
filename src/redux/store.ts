import { configureStore } from "@reduxjs/toolkit";
import { searchSlice } from "./Slices/searchSlice";
import userSlice from "./Slices/userSlice";
import loginSlice from "./Slices/loginSlice";

const store = configureStore({
	reducer: {
		search: searchSlice.reducer,
		user: userSlice,
		login: loginSlice,
	},
});

export default store;
export type RootState = ReturnType<typeof store.getState>;