import React from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";

import { FRIENDS_ROUTE } from "../constants";
import FriendForm from "./FriendForm";

function NewFriendForm(props) {
  const history = useHistory();

  const onSubmit = values => {
    props.addFriend(values).then(res => history.push(FRIENDS_ROUTE));
  };

  return (
    <>
      <FriendForm onSubmit={onSubmit} />
    </>
  );
}

export default NewFriendForm;
