import React from "react";
import { Link } from "react-router-dom";

import { FRIENDS_ROUTE } from "../constants";

function Friends(props) {
  return (
    <div>
      <h2>Friends</h2>
      <ul>
        {props.friends.map(friend => (
          <li key={friend.id}>
            <Link to={`${FRIENDS_ROUTE}/${friend.id}`}>{friend.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Friends;
