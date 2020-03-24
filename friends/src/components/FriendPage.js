import React from "react";
import { Link, useParams, useHistory } from "react-router-dom";

import { FRIENDS_ROUTE } from "../constants";

function FriendPage(props) {
  const params = useParams();
  const id = parseInt(params.id);
  const history = useHistory();

  const friend = props.friends.find(f => f.id === id);

  if (friend === undefined) {
    return (
      <div>
        Couldn't find friend with id of {id}.{" "}
        <Link to={FRIENDS_ROUTE}>Return to friends list</Link>
      </div>
    );
  }

  const handleDelete = () => {
    props.deleteFriend(id).then(() => history.push(FRIENDS_ROUTE));
  };

  return (
    <div>
      <h2>{friend.name}</h2>
      <ul>
        <li>Age: {friend.age}</li>
        <li>E-Mail: {friend.email}</li>
      </ul>
      <Link to={`${FRIENDS_ROUTE}/edit/${friend.id}`}>Edit</Link>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default FriendPage;
