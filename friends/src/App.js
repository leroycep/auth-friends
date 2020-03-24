import React, { useState, useEffect } from "react";
import { Link, Switch, Route, } from "react-router-dom";

import {
  TOKEN_KEY,
  FRIENDS_API,
  FRIENDS_ROUTE,
  LOGIN_ROUTE,
  NEW_FRIEND_ROUTE
} from "./constants";
import { axiosWithAuth } from "./utils/axiosWithAuth";
import PrivateRoute from "./components/PrivateRoute";
import Navbar from "./components/Navbar";
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

  const deleteFriend = friendId => {
    return axiosWithAuth()
      .delete(`${FRIENDS_API}/${friendId}`)
      .then(res => {
        setFriends(res.data);
      })
      .catch(err => console.log("Failed to delete friend from API", err));
  };

  useEffect(() => {
    fetchFriends();
  }, []);

  const loggedIn = window.localStorage.getItem(TOKEN_KEY) !== undefined;

  return (
    <>
      {loggedIn && <Navbar />}
      <Switch>
        <Route path={LOGIN_ROUTE} component={Login} />
        <PrivateRoute
          exact
          path={FRIENDS_ROUTE}
          render={props => <Friends {...props} friends={friends} />}
        />
        <PrivateRoute
          exact
          path={NEW_FRIEND_ROUTE}
          render={props => <FriendForm {...props} addFriend={addFriend} />}
        />
        <PrivateRoute
          exact
          path={`${FRIENDS_ROUTE}/:id`}
          render={props => <FriendPage {...props} friends={friends} deleteFriend={deleteFriend} />}
        />

        {/* Make other routes redirect to /friends */}
        <PrivateRoute path="/">
          Uknown page: <Link to={FRIENDS_ROUTE}>Return to friends list</Link>
        </PrivateRoute>
      </Switch>
    </>
  );
}

export default App;
