import React, { useState, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { FRIENDS_API, FRIENDS_ROUTE, LOGIN_ROUTE } from "./constants";
import { axiosWithAuth } from "./utils/axiosWithAuth";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/Login";
import Friends from "./components/Friends";
import FriendForm from "./components/FriendForm";
import FriendPage from "./components/FriendPage";

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

  const addFriend = newFriend => {
    return axiosWithAuth()
      .post(FRIENDS_API, newFriend)
      .then(res => {
        setFriends(res.data);
      })
      .catch(err => console.log("Failed to get friends from API", err));
  };

  useEffect(() => {
    fetchFriends();
  }, []);

  return (
    <>
      <Switch>
        <Route path={LOGIN_ROUTE} component={Login} />
        <PrivateRoute
          exact
          path={FRIENDS_ROUTE}
          render={props => <Friends {...props} friends={friends} />}
        />
        <PrivateRoute
          exact
          path={`${FRIENDS_ROUTE}/new`}
          render={props => <FriendForm {...props} addFriend={addFriend} />}
        />
        <PrivateRoute
          exact
          path={`${FRIENDS_ROUTE}/:id`}
          render={props => <FriendPage {...props} friends={friends} />}
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
