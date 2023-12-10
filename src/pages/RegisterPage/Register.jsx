import "./Register.css";
function Register() {
  return (
    <div>
      <main>
        <div class="container">
          <div class="signup-text">
            <h1>Tạo tài khoản</h1>
            <p>Go ahead and sign up, let everyone know how awesome you are!</p>
            <form id="form">
              <div>
                <input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Họ và tên"
                  data-valid="false"
                />
              </div>
              <p class="error"></p>
              <div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  data-valid="false"
                />
              </div>
              <p class="error"></p>
              <div>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Mật khẩu"
                  data-valid="false"
                />
              </div>
              <p class="error"></p>
              <div>
                <input
                  type="password"
                  name="password_confirmation"
                  id="password_confirmation"
                  placeholder="Nhập lại mật khẩu"
                  data-valid="false"
                />
              </div>
              <p class="error"></p>
              <button className="btnSignup">Đăng ký</button>
            </form>
          </div>
          <div class="signup-image"></div>
        </div>
      </main>
    </div>
  );
}

export default Register;
