import React from "react";
import "./LoginForm.css";
import { useNavigate } from "react-router-dom";
const LoginForm = () => {
  const navigate = useNavigate();
  const handleOnClick = () => {
    navigate("/");
  };
  return (
    <div className="login-form">
      <form>
        <label htmlFor="inputEmail">E-mail</label>
        <input type="email" id="inputEmail" name="email" />

        <label htmlFor="inputPassword">Password</label>
        <input type="password" id="inputPassword" name="password" />

        <button onClick={handleOnClick}>Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
