import React from "react";

function Auth({ children, type }) {
  return (
    <div className="authPage">
      <div className="container h-100 align-items-center d-flex">
        <div className="row justify-content-center w-100">
          <div className="col-lg-6 col-md-8 col-sm-10 col-12">
            <div className="card rounded-4 border-0">
              <div className="card-body rounded-4">
                <label className="form-label w-100 mb-3">
                  <h4>{type}</h4>
                </label>
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;
