import { configureStore } from "@reduxjs/toolkit";
import { combineReducers, Store } from "redux";
import thunk from "redux-thunk";

import { LocalStorage } from "../interfaces/interface";

const rootReducer = combineReducers({
	// reducers go here
});

const userInfoFromStorage: LocalStorage = localStorage.getItem("userInfo")
	? JSON.parse(localStorage.getItem("userInfo") as string)
	: null;

const initialState = {
	userLogin: { userInfo: userInfoFromStorage },
};
const middleware = [thunk];

const store: Store = configureStore({
	reducer: rootReducer,
	devTools: process.env.NODE_ENV !== "production",
	middleware,
	preloadedState: initialState,
});

export default store;
