import React from "react";
import { NavLink, useHistory } from "react-router-dom";

import {
  TOKEN_KEY,
  FRIENDS_ROUTE,
  NEW_FRIEND_ROUTE,
  LOGIN_ROUTE
} from "../constants";

const style = {
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center"
};

const activeLink = {
  border: "1px solid black"
};

function Navbar() {
  const history = useHistory();

  const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
    history.push(LOGIN_ROUTE);
  };

  return (
    <div style={style}>
      <NavLink activeStyle={activeLink} to={FRIENDS_ROUTE}>
        Friends
      </NavLink>

      <NavLink activeStyle={activeLink} to={NEW_FRIEND_ROUTE}>
        Add New Friend
      </NavLink>

      <p>Friends App</p>

      <button onClick={logout}>Log out</button>
    </div>
  );
}

export default Navbar;
