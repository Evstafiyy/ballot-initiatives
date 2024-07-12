import axios from "axios";
import React, { useState } from "react";
import { setAccessToken } from "../../../services/axiosInstance";

function AuthForm({setUser}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const result = await axios.post("/api/auth/login", { email, password });
    setUser(result.data.user)
    setAccessToken(result.data.accessToken)
 
  };

  return (
    <div>
      <form onSubmit={(e) => onSubmitHandler(e)}>
        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          type="text"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button type="submit">Войти</button>
      </form>
    </div>
  );
}

export default AuthForm;