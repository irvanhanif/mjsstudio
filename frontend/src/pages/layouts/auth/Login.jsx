import React from "react";
import { Link } from "react-router-dom";
import Auth from "./Auth";

function Login() {
  return (
    <Auth type={"Login"}>
      <form action="">
        <div className="row">
          <div className="col-12">
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@gmail.com"
              />
              <label
                htmlFor="floatingInput"
                className="form-label">
                Email address
              </label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
              />
              <label
                htmlFor="floatingPassword"
                className="form-label">
                Password
              </label>
            </div>
          </div>
        </div>
        <div className="LinkToRegisAndForgotPw">
          <Link to={"/register"}>Belum Punya Akun</Link>
        </div>
        <div className="btnLogin w-100 justify-content-end d-flex">
          <button className="btn">Masuk</button>
        </div>
      </form>
    </Auth>
  );
}

export default Login;
