import { configureStore } from "@reduxjs/toolkit";
import { combineReducers, compose, Store } from "redux";
import thunk from "redux-thunk";

import { LocalStorage } from "../interfaces/interface";
import {
	userDeleteReducer,
	userDetailsReducer,
	userLoginReducer,
	userRegisterReducer,
	userUpdateProfileReducer,
	userUpdateReducer,
} from "../redux/authDucks";

declare global {
	interface Window {
		__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
	}
}

interface ConfigureStore {
	store: Store;
	history: any;
	composeEnhancers: unknown;
}

const rootReducer = combineReducers({
	userLogin: userLoginReducer,
	userRegister: userRegisterReducer,
	userDetails: userDetailsReducer,
	userUpdateProfile: userUpdateProfileReducer,
	userDelete: userDeleteReducer,
	userUpdate: userUpdateReducer,
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
