import React, { memo } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Switch from "../helper/Switch/index";
import Route from "../helper/Route/index";
import { UserProvider } from "../context/index";

const SignInPage = React.lazy(() => import("../login/login"));
const Intro = React.lazy(() => import("../crud/crud"));
const Cites = React.lazy(() => import("../cites/Cites"));

export const routes = [
  {
    path: "/",
    authorize: true,
    component: Intro,
  },
  {
    path: "/login",
    authorize: false,
    component: SignInPage,
  },
  {
    path: "/cites",
    authorize: true,
    component: Cites,
  },
];

function MainRouter() {
  return (
    <Router>
      <Switch>
        <UserProvider>
          {routes.map(({ component: Component, ...rest }) => (
            <Route exact {...rest} key={rest.path}>
              <Component />
            </Route>
          ))}
        </UserProvider>
      </Switch>
    </Router>
  );
}

export default memo(MainRouter);
