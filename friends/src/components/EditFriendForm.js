import React from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";

import { FRIENDS_ROUTE } from "../constants";
import FriendForm from "./FriendForm";

function EditFriendForm(props) {
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

  const onSubmit = values => {
    props.editFriend(id, values).then(res => history.push(FRIENDS_ROUTE));
  };

  return (
    <>
      <FriendForm onSubmit={onSubmit} defaultValues={friend} />
    </>
  );
}

export default EditFriendForm;
