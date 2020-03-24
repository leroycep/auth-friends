import React from "react";
import { Route, Redirect } from "react-router-dom";

import { TOKEN_KEY, LOGIN_ROUTE } from "../constants";

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        localStorage.getItem(TOKEN_KEY) ? (
          <Component {...props} />
        ) : (
          <Redirect to={LOGIN_ROUTE} />
        )
      }
    />
  );
}

export default PrivateRoute;
