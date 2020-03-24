import React from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";

function Login() {
  const { handleSubmit, register } = useForm();

  const onSubmit = values => {
      console.log(values);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input ref={register} name="username" type="text" />
      <input ref={register} name="password" type="password" />
      <input type="submit" />
    </form>
  );
}

export default Login;
