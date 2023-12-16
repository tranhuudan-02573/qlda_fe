import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./LoginForm.css";
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const [showForm, setShowForm] = useState(true);
  const [showAccountButton, setShowAccountButton] = useState(false);
  const [arialHidden, setArialHidden] = useState(true);
  const [resultMessage, setResultMessage] = useState("");
  const emailRef = useRef();
  useEffect(() => {
    checkAuthentication();
  }, []);

  const checkAuthentication = () => {
    const token = localStorage.getItem("token");

    if (token) {
      setAuthenticated(true);
      setShowAccountButton(true);
    } else {
      setAuthenticated(false);
      setShowAccountButton(false);
    }
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (email.trim() === "") {
      setResultMessage("email not null");
      return;
    }

    const payload = {
      email: email,
      password: password,
    };

    fetch("http://localhost:8080/api/auth/authenticate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const token = data.token;
        localStorage.setItem("token", token);
        navigate("/forum");
      })
      .catch((error) => {
        setResultMessage(
          "Sai tài khoản hoặc mật khẩu, vui lòng đăng nhập lại!"
        );
        setEmail("");
        setPassword("");
        emailRef.current.focus();
        console.error("Đăng nhập thất bại:", error);
        navigate("/login");
      });
  };

  return (
    <div className="wrapper">
      <div className="modal-login ">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">
            Login
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div className="modal-body">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="example@gmail.com"
                required
                value={email}
                onChange={handleEmailChange}
                ref={emailRef}
              />
              {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                required
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
            <p className="text-lable" style={{ marginTop: "10px" }}>
              Chưa có tài khoản?
              <Link to="/signup">click here</Link>
            </p>

            <p
              className="text-message"
              style={{ textAlign: "center", color: " red", margin: "10px 0" }}
            >
              {" "}
              {resultMessage}
            </p>
            <button type="submit" className="btnLogin">
              <span className="fa fa-sign-in me-2"></span> Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
