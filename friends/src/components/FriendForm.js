import React from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";

import { FRIENDS_ROUTE } from "../constants";

function FriendForm(props) {
  const { register, handleSubmit } = useForm({
    defaultValues: props.defaultValues
  });

  return (
    <div>
      <h2>New Friend</h2>
      <form onSubmit={handleSubmit(props.onSubmit)}>
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
