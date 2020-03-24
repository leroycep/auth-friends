import React, { useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { FRIENDS_API, FRIENDS_ROUTE, LOGIN_ROUTE } from "./constants";
import { axiosWithAuth } from "./utils/axiosWithAuth";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/Login";
import Friends from "./components/Friends";

function App() {
  const [friends, setFriends] = useState([]);

  const fetchFriends = () => {
    axiosWithAuth()
      .get(FRIENDS_API)
      .then(res => {
        setFriends(res.data);
      })
      .catch(err => console.log("Failed to get friends from API", err));
  };

  return (
    <>
      <Switch>
        <Route path={LOGIN_ROUTE} component={Login} />
        <PrivateRoute
          exact
          path={FRIENDS_ROUTE}
          render={props => (
            <Friends {...props} friends={friends} fetchFriends={fetchFriends} />
          )}
        />

        {/* Make other routes redirect to /friends */}
        <PrivateRoute path="/">
          <Redirect to={FRIENDS_ROUTE} />
        </PrivateRoute>
      </Switch>
    </>
  );
}

export default App;
