// TYPES

export const USER_LOGIN_REQUEST = "USER_LOGIN_REQUEST";
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export const USER_LOGIN_FAIL = "USER_LOGIN_FAIL";
export const USER_LOGOUT = "USER_LOGOUT";

export const USER_REGISTER_REQUEST = "USER_REGISTER_REQUEST";
export const USER_REGISTER_SUCCESS = "USER_REGISTER_SUCCESS";
export const USER_REGISTER_FAIL = "USER_REGISTER_FAIL";

export const USER_DETAILS_REQUEST = "USER_DETAILS_REQUEST";
export const USER_DETAILS_SUCCESS = "USER_DETAILS_SUCCESS";
export const USER_DETAILS_FAIL = "USER_DETAILS_FAIL";
export const USER_DETAILS_RESET = "USER_DETAILS_RESET";

export const USER_UPDATE_PROFILE_REQUEST = "USER_UPDATE_PROFILE_REQUEST";
export const USER_UPDATE_PROFILE_SUCCESS = "USER_UPDATE_PROFILE_SUCCESS";
export const USER_UPDATE_PROFILE_FAIL = "USER_UPDATE_PROFILE_FAIL";
export const USER_UPDATE_PROFILE_RESET = "USER_UPDATE_RESET";

export const USER_DELETE_REQUEST = "USER_DELETE_REQUEST";
export const USER_DELETE_SUCCESS = "USER_DELETE_SUCCESS";
export const USER_DELETE_FAIL = "USER_DELETE_FAIL";

export const USER_UPDATE_REQUEST = "USER_UPDATE_REQUEST";
export const USER_UPDATE_SUCCESS = "USER_UPDATE_SUCCESS";
export const USER_UPDATE_FAIL = "USER_UPDATE_FAIL";
export const USER_UPDATE_RESET = "USER_UPDATE_RESET";

export interface UserLoginRequest {
	type: typeof USER_LOGIN_REQUEST;
	loading: boolean;
}

export interface UserLoginSuccess {
	type: typeof USER_LOGIN_SUCCESS;
	loading: boolean;
	payload: string;
}

export interface UserLoginFail {
	type: typeof USER_LOGIN_FAIL;
	loading: boolean;
	payload: string;
	error: string;
}

export interface UserLogout {
	type: typeof USER_LOGOUT;
}

export interface UserRegisterRequest {
	type: typeof USER_REGISTER_REQUEST;
	loading: boolean;
}

export interface UserRegisterSuccess {
	type: typeof USER_REGISTER_SUCCESS;
	loading: boolean;
	payload: string;
}

export interface UserRegisterFail {
	type: typeof USER_REGISTER_FAIL;
	loading: boolean;
	payload: string;
	error: string;
}

export interface UserLogout {
	type: typeof USER_LOGOUT;
}

export interface UserDetailsRequest {
	type: typeof USER_DETAILS_REQUEST;
	loading: boolean;
}

export interface UserDetailsSuccess {
	type: typeof USER_DETAILS_SUCCESS;
	loading: boolean;
	payload: string;
}

export interface UserDetailsFail {
	type: typeof USER_DETAILS_FAIL;
	loading: boolean;
	payload: string;
	error: string;
}

export interface UserDetailsReset {
	type: typeof USER_DETAILS_RESET;
}

export interface UserUpdateProfileRequest {
	type: typeof USER_UPDATE_PROFILE_REQUEST;
	loading: boolean;
}

export interface UserUpdateProfileSuccess {
	type: typeof USER_UPDATE_PROFILE_SUCCESS;
	loading: boolean;
	payload: string;
	success: boolean;
}

export interface UserUpdateProfileFail {
	type: typeof USER_UPDATE_PROFILE_FAIL;
	loading: boolean;
	payload: string;
	success: boolean;
	error: string;
}

export interface UserDeleteRequest {
	type: typeof USER_DELETE_REQUEST;
	loading: boolean;
}

export interface UserDeleteSuccess {
	type: typeof USER_DELETE_SUCCESS;
	loading: boolean;
	success: boolean;
}

export interface UserDeleteFail {
	type: typeof USER_DELETE_FAIL;
	loading: boolean;
	payload: string;
	success: boolean;
	error: string;
}

export interface UserUpdateRequest {
	type: typeof USER_UPDATE_REQUEST;
	loading: boolean;
}

export interface UserUpdateSuccess {
	type: typeof USER_UPDATE_SUCCESS;
	loading: boolean;
	success: boolean;
}

export interface UserUpdateFail {
	type: typeof USER_UPDATE_FAIL;
	loading: boolean;
	payload: string;
}

export interface UserUpdateReset {
	type: typeof USER_UPDATE_RESET;
}

export type UserActionTypes =
	| UserLoginRequest
	| UserLoginSuccess
	| UserLoginFail
	| UserLogout
	| UserRegisterRequest
	| UserRegisterSuccess
	| UserRegisterFail
	| UserLogout
	| UserDetailsRequest
	| UserDetailsSuccess
	| UserDetailsFail
	| UserDetailsReset
	| UserUpdateProfileRequest
	| UserUpdateProfileSuccess
	| UserUpdateProfileFail
	| UserDeleteRequest
	| UserDeleteSuccess
	| UserDeleteFail
	| UserUpdateRequest
	| UserUpdateSuccess
	| UserUpdateFail
	| UserUpdateReset;

//REDUCERS

export const userLoginReducer = (state = {}, action: UserActionTypes) => {
	switch (action.type) {
		case USER_LOGIN_REQUEST:
			return {
				...state,
				loading: true,
				error: null,
			};
		case USER_LOGIN_SUCCESS:
			return {
				...state,
				loading: false,
				error: null,
				user: action.payload,
			};
		case USER_LOGIN_FAIL:
			return {
				...state,
				loading: false,
				error: action.payload,
			};
		case USER_LOGOUT:
			return {};
		default:
			return state;
	}
};

export const userRegisterReducer = (state = {}, action: UserActionTypes) => {
	switch (action.type) {
		case USER_REGISTER_REQUEST:
			return { loading: true };
		case USER_REGISTER_SUCCESS:
			return { loading: false, userInfo: action.payload };
		case USER_REGISTER_FAIL:
			return { loading: false, error: action.payload };
		case USER_LOGOUT:
			return {};
		default:
			return state;
	}
};

export const userDetailsReducer = (state = { user: {} }, action: UserActionTypes) => {
	switch (action.type) {
		case USER_DETAILS_REQUEST:
			return { ...state, loading: true };
		case USER_DETAILS_SUCCESS:
			return { loading: false, user: action.payload };
		case USER_DETAILS_FAIL:
			return { loading: false, error: action.payload };
		case USER_DETAILS_RESET:
			return { user: {} };
		default:
			return state;
	}
};

export const userUpdateProfileReducer = (state = {}, action: UserActionTypes) => {
	switch (action.type) {
		case USER_UPDATE_PROFILE_REQUEST:
			return { loading: true };
		case USER_UPDATE_PROFILE_SUCCESS:
			return { loading: false, success: true, userInfo: action.payload };
		case USER_UPDATE_PROFILE_FAIL:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};

export const userDeleteReducer = (state = {}, action: UserActionTypes) => {
	switch (action.type) {
		case USER_DELETE_REQUEST:
			return { loading: true };
		case USER_DELETE_SUCCESS:
			return { loading: false, success: true };
		case USER_DELETE_FAIL:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};

export const userUpdateReducer = (state = { user: {} }, action: UserActionTypes) => {
	switch (action.type) {
		case USER_UPDATE_REQUEST:
			return { loading: true };
		case USER_UPDATE_SUCCESS:
			return { loading: false, success: true };
		case USER_UPDATE_FAIL:
			return { loading: false, error: action.payload };
		case USER_UPDATE_RESET:
			return {
				user: {},
			};
		default:
			return state;
	}
};
