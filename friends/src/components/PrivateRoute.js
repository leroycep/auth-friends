import React from "react";
import { Route, Redirect } from "react-router-dom";

import { TOKEN_KEY, LOGIN_ROUTE } from "../constants";

function PrivateRoute({ component: Component, render, ...rest }) {
  if (Component !== undefined && render !== undefined) {
    throw new Error("Component and render cannot both be defined");
  }

  return (
    <Route
      {...rest}
      render={props =>
        localStorage.getItem(TOKEN_KEY) ? (
          <>
            {Component && <Component {...props} />}
            {render && render()}
          </>
        ) : (
          <Redirect to={LOGIN_ROUTE} />
        )
      }
    />
  );
}

export default PrivateRoute;
