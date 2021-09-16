import React, { memo, useEffect, useState } from "react";
import { Redirect, Route as RRoute, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { getCachedData } from "../../client/cookieManager";
import { useUserState } from "../../context";

function Route({ authorize, children, ...rest }) {
  const { pathname } = useLocation();
  const { authorized } = useUserState();
  const [token, setToken] = useState("");

  useEffect(() => {
    setToken(getCachedData("access_token"));
  }, [getCachedData("access_token"), authorized]);

  return (
    <RRoute
      {...rest}
      render={({ location }) => {
        if (!token && pathname !== "/login") {
          return (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location },
              }}
            />
          );
        } else if (!!token && pathname === "/login") {
          return (
            <Redirect
              to={{
                pathname: "/",
                state: { from: location },
              }}
            />
          );
        } else {
          return children;
        }
      }}
    />
  );
}

Route.propTypes = {
  authorize: PropTypes.bool,
};

export default memo(Route);
