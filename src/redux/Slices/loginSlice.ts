import { createSlice } from "@reduxjs/toolkit";
import { loginState } from "../../_interfaces/StoreInterfaces";

const initialState: loginState = {
	login: '',
};

const loginSlice = createSlice({
	name: 'login',
	initialState,
	reducers: {
		setLogin: (state, action) => {
			state.login = action.payload;
		},
	},
});

export const { setLogin } = loginSlice.actions;
export default loginSlice.reducer;
