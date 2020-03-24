import React from "react";
import { Link, useParams } from "react-router-dom";

import { FRIENDS_ROUTE } from "../constants";

function FriendPage(props) {
  const params = useParams();
  const id = parseInt(params.id);

  const friend = props.friends.find(f => f.id === id);

  if (friend === undefined) {
    return (
      <div>
        Couldn't find friend with id of {id}.{" "}
        <Link to={FRIENDS_ROUTE}>Return to friends list</Link>
      </div>
    );
  }

  return (
    <div>
      <h2>{friend.name}</h2>
      <ul>
        <li>Age: {friend.age}</li>
        <li>E-Mail: {friend.email}</li>
      </ul>
    </div>
  );
}

export default FriendPage;
