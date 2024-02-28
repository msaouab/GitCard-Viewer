import { configureStore } from "@reduxjs/toolkit";
import { searchSlice } from "./searchSlice";
import userSlice from "./Slices/userSlice";

const store = configureStore({
	reducer: {
		search: searchSlice.reducer,
		user: userSlice,
	},
});

export default store;
export type RootState = ReturnType<typeof store.getState>;