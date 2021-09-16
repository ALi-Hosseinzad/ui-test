import { USER_LOGIN, USER_LOGOUT, USER_FETCH } from "./UserAction";
import { cacheData, clearCache } from "../client/cookieManager";

export const userInitState = {
  token: null,
  user: null,
};

const userReducer = (state = userInitState, action) => {
  switch (action.type) {
    case USER_LOGIN.SUCCESS:
      cacheData("access_token", action?.payload?.token);
      cacheData("user", action?.payload?.user);
      return {
        ...state,
        token: action.payload.token,
        user: action.payload.user,
      };

    case USER_LOGOUT.SUCCESS: {
      clearCache("access_token");
      clearCache("user");
      return {
        ...state,
        token: null,
      };
    }
    case USER_FETCH.SUCCESS: {
      return {
        ...state,
        user: action.payload.user,
      };
    }

    default:
      return state;
  }
};

export { userReducer };
