import React from "react";
import { Link } from "react-router-dom";
import Auth from "./Auth";

function Register() {
  return (
    <Auth type={"Register"}>
      <form action="">
        <div className="row">
          <div className="col-12 mb-3">
            <div className="form-floating">
              <input
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="your"
              />
              <label
                htmlFor="floatingInput"
                className="form-label">
                Nama Lengkap
              </label>
            </div>
          </div>
          <div className="col-12 mb-3">
            <div className="form-floating">
              <input
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@gmail.com"
              />
              <label
                htmlFor="floatingInput"
                className="form-label">
                Alamat Email
              </label>
            </div>
          </div>
          <div className="col-12 mb-3">
            <div className="form-floating">
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
          <div className="col-12 mb-3">
            <div className="form-floating">
              <input
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Confirm Password"
              />
              <label
                htmlFor="floatingPassword"
                className="form-label">
                Ulangi Password
              </label>
            </div>
          </div>
        </div>
        <div className="LinkToRegisAndForgotPw">
          <Link to={"/login"}>Sudah Punya Akun</Link>
        </div>
        <div className="btnLogin w-100 justify-content-end d-flex">
          <button className="btn ">Daftar Sekarang</button>
        </div>
      </form>
    </Auth>
  );
}

export default Register;
