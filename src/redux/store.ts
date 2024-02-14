import { configureStore } from "@reduxjs/toolkit";
import { searchSlice } from "./searchSlice";
import { userIdSlice } from "./Slices/userIdSlice";

const store = configureStore({
	reducer: {
		search: searchSlice.reducer,
		userId: userIdSlice.reducer,
	},
});

export default store;
export type RootState = ReturnType<typeof store.getState>;