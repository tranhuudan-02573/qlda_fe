import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";
const Register = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [resultMessage, setResultMessage] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    // Kiểm tra xem JWT có tồn tại trong localStorage hay không
    const token = localStorage.getItem("token");
    if (token) {
      setAuthenticated(true);
    }
  }, []);

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogout = () => {
    // Xóa JWT khỏi localStorage và cập nhật trạng thái xác thực
    localStorage.removeItem("token");
    setAuthenticated(false);
    window.location.reload();
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Kiểm tra mật khẩu hợp lệ
    if (password.length < 8 || !/[A-Z]/.test(password)) {
      setResultMessage(
        "Password must be at least 8 characters long and contain at least 1 uppercase character."
      );
      return; // Dừng xử lý nếu mật khẩu không hợp lệ
    }

    const payload = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    };

    fetch("http://localhost:8080/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then((data) => {
        setResultMessage("Sign up success");
        navigate("/login");
      })
      .catch((error) => {
        setResultMessage("Your email already exists in the system");
        console.error("Đăng ký thất bại:", error);
        navigate("/signup");
      });
  };

  return (
    <div className="wrapper">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">
            Register
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div className="modal-body">
          {/* Form đăng ký */}
          <form onSubmit={handleSubmit}>
            <div className="mb-7">
              <label htmlFor="firstName" className="form-label">
                First Name
              </label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                required
                placeholder="le trung"
                value={firstName}
                onChange={handleFirstNameChange}
              />
            </div>
            <div className="mb-7">
              <label htmlFor="lastName" className="form-label">
                Last Name
              </label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                required
                placeholder="bao"
                value={lastName}
                onChange={handleLastNameChange}
              />
            </div>
            <div className="mb-7">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                required
                placeholder="example@gmail.com"
                aria-describedby="emailHelp"
                value={email}
                onChange={handleEmailChange}
              />
              {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
            </div>
            <div className="mb-7">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                aria-describedby="passwordHelp"
                placeholder="more than 8 characters and at least 1 uppercase character."
                id="password"
                required
                value={password}
                onChange={handlePasswordChange}
              />
              {/* <div id="passwordHelp" className="form-text">more than 8 characters and at least 1 uppercase character.</div> */}
            </div>
            <div className="mb-7">
              <label htmlFor="password" className="form-label">
                Password Confirm
              </label>
              <input
                type="password"
                required
                className="form-control"
                aria-describedby="passwordHelp"
                placeholder="please confirm password"
                id="password"
              />
              <p>{resultMessage}</p>
            </div>
            <button type="submit" className="btnRegister">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
