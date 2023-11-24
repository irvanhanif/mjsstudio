import React from "react";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div id="PageNotFound">
      <div className="container">
        <div className="row text-center align-content-center d-flex">
          <div className="col-12 code">
            <label>404</label>
          </div>
          <div className="col-12 message">
            <h6>
              <span>Oop's, Page not found</span>
              <br />
              Please, recheck your link to our page ^-^
            </h6>
          </div>
          <div className="col-12 homeLink">
            <Link
              to={"/"}
              className="btn">
              Kembali ke Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageNotFound;
