import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { LOGIN_ROUTE } from "./constants";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/Login";
import Friends from "./components/Friends";

function App() {
  return (
    <>
      <Switch>
        <Route path="/login" component={Login} />
        <PrivateRoute exact path="/friends" component={Friends} />

        {/* Make other routes redirect to /friends */}
        <PrivateRoute path="/">
          <Redirect to="/friends" />
        </PrivateRoute>
      </Switch>
    </>
  );
}

export default App;
