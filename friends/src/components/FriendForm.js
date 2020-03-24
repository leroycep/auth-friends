import React from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";

import { FRIENDS_ROUTE } from "../constants";

function FriendForm(props) {
  const { register, handleSubmit } = useForm();
  const history = useHistory();

  const onSubmit = values => {
    props.addFriend(values).then(res => history.push(FRIENDS_ROUTE));
  };

  return (
    <div>
      <h2>New Friend</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Name: <input ref={register} name="name" type="text" />
        </label>
        <label>
          Age: <input ref={register} name="age" type="number" />
        </label>
        <label>
          Email: <input ref={register} name="email" type="email" />
        </label>
        <input type="submit" />
      </form>
    </div>
  );
}

export default FriendForm;
