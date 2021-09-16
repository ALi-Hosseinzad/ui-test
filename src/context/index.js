import userApi from "../helper/user";
import React, { useEffect, useReducer, createContext } from "react";
import { userInitState, userReducer } from "../reducer/index";
import { getCachedData } from "../client/cookieManager";
import { USER_FETCH } from "../reducer/UserAction";

const UserDispatchContext = createContext();
const UserStateContext = createContext();

function UserProvider(props) {
  const { children } = props;
  const token = getCachedData("access_token");
  const user = getCachedData("user");
  const [state, dispatch] = useReducer(userReducer, {
    ...userInitState,
    token,
    user,
    authorized: !!token ? true : false,
  });

  useEffect(() => {
    if (!!token) {
      userApi
        .getUserInfo({ payload: user })
        .then((content) => {
          dispatch({
            type: USER_FETCH.SUCCESS,
            payload: { user: content.data },
          });
        })
        .catch((error) => {
          error
            ? console.log(error?.data?.message)
            : console.log("There is a problem");
        });
    }
  }, [token]);

  return (
    <UserStateContext.Provider value={state}>
      <UserDispatchContext.Provider value={dispatch}>
        {children}
      </UserDispatchContext.Provider>
    </UserStateContext.Provider>
  );
}

function useUserState() {
  const context = React.useContext(UserStateContext);
  if (context === undefined) {
    throw new Error("useUserState must be used within a UserProvider");
  }
  return context;
}
function useUserDispatch() {
  const context = React.useContext(UserDispatchContext);
  if (context === undefined) {
    throw new Error("useUserDispatch must be used within a UserProvider");
  }
  return context;
}
export { UserProvider, useUserState, useUserDispatch };
