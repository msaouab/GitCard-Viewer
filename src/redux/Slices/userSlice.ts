import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	user: null,
};

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setSelectedUser: (state, action) => {
			state.user = action.payload;
		},
	},
});

export default userSlice.reducer;
export const { setSelectedUser } = userSlice.actions;