import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

import { TOKEN_KEY, LOGIN_API } from "../constants";

function Login() {
  const { handleSubmit, register } = useForm();
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = values => {
    setIsLoading(true);
    axios
      .post(LOGIN_API, values)
      .then(res => {
        window.localStorage.setItem(TOKEN_KEY, res.data.payload);
        setIsLoading(false);
        history.push("/");
      })
      .catch(err => console.log(err));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        Username: <input ref={register} name="username" type="text" />
      </label>
      <label>
        Password: <input ref={register} name="password" type="password" />
      </label>
      <input type="submit" disabled={isLoading} />
      {isLoading && <p>Loading...</p>}
    </form>
  );
}

export default Login;
